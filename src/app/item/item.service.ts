import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../authentication/http.service';
import {map} from 'rxjs/operators';
import {Item} from './item';
import {PriceOfItems} from './price-of-items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }


  postItem(item: Item): Observable<Item> {
    return this.http.post(HttpService.SERVICE_PATH + 'items', item, {headers: this.headers})
        .pipe(map(response => <Item>response));
  }

  getItems(): Observable<Item[]> {
    return this.http.get(HttpService.SERVICE_PATH + 'items', {headers: this.headers})
        .pipe(map(response => <Item[]>response));
  }

  getPrice(item: Item): Observable<PriceOfItems> {
    return this.http.post(HttpService.SERVICE_PATH + 'items/getPrices', item, {headers: this.headers})
        .pipe(map(response => <PriceOfItems>response));
  }
}
