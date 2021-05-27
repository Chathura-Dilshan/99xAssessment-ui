import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../../authentication/http.service';
import {map} from 'rxjs/operators';
import {User} from './user';

@Injectable()
export class UserCreationService {
  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }

  postUser(user: User): Observable<User> {
    if (user.userType === 'GUEST_USER') {
      this.headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:123456')});

    }
    return this.http.post(HttpService.SERVICE_PATH + 'users', user, {headers: this.headers})
        .pipe(map(response => <User>response));
  }

  findByUsername(user: User): Observable<User> {
    return this.http.post(HttpService.SERVICE_PATH + 'users/findByUsername', user , {headers: this.headers})
        .pipe(map(response => <User>response));
  }
}
