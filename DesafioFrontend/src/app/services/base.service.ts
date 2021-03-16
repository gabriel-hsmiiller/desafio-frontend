import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private _http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this._http.get<T>(url);
  }

  post<T>(url: string, body: object): Observable<T> {
    return this._http.post<T>(url, body);
  }

  put<T>(url: string, body: object): Observable<T> {
    return this._http.put<T>(url, body);
  }

  delete<T>(url: string, body?: object): Observable<T> {
    return this._http.delete<T>(url, body);
  }
}
