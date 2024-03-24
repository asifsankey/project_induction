import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostservicenService {
  private url:string ="http://localhost:4000/review";

  constructor(private http: HttpClient) { }

  postData(data: object): Observable<any> {
   console.log(data);
    return this.http.post<any>(this.url, data);
  }
}

