import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../../authentication/http.service';
import {map} from 'rxjs/operators';
import {Roles} from '../../authentication/Roles';

@Injectable()
export class RoleService {
  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }


  postRole(roles: Roles): Observable<Roles> {
    return this.http.post(HttpService.SERVICE_PATH + 'roles', roles, {headers: this.headers})
        .pipe(map(response => <Roles>response));
  }

  findRoleByStatus(): Observable<Roles[]> {
    return this.http.get(HttpService.SERVICE_PATH + 'roles/findRoleByStatus', {headers: this.headers})
        .pipe(map(response => <Roles[]>response));
  }
}
