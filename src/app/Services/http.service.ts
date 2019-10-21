import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../Utils/contants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// export interface HttpInterface {
//   message: string
//   data: any[]
//   error: boolean
// }

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<any> {
    // this._http.get(BASE_URL + '/breweries')
    return this._http.get(`${BASE_URL}/breweries`);
  }
}
