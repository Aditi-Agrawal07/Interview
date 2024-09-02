import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) {}
     getStudent():Observable<any>{
      return this.http.get("http://localhost:4000/getStudent")
    }

    filterStudent(name:string):Observable<any>{
      return this.http.get(`http://localhost:4000/filter/${name}`)
    }
   
}
