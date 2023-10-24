import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterCandidateService {

  constructor(private http:HttpClient) { }
  registerUser(data:any):Observable<any>{
    let dataUrl:string="https://localhost:7278/api/Form"
    return this.http.post<any>(dataUrl,data)
  }
}
