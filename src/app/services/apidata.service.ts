import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  private apiurl="http://localhost:3000/supplierDetails"
  constructor(private http:HttpClient) { }

  getpost(): Observable<any>{
    return this.http.get(this.apiurl)
    
    
  }
}
