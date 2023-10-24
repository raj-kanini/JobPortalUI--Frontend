import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor(private http:HttpClient) { }
  dataUrl:string="https://localhost:7278/api/JobDescription"

  getAllJobs():Observable<any>{
    return this.http.get<any>(this.dataUrl)
  }
  getJobById(id:number):Observable<any>{
    let url=`${this.dataUrl}/${id}`
    return this.http.get<any>(url)
  }
}
