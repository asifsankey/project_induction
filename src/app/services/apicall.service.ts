import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private apiurl="http://localhost:3000/data"
  constructor(private http:HttpClient) { }

  getpost(): Observable<any>{
    return this.http.get(this.apiurl)
    
    
  }
}
