import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor(private http:HttpClient) { }

  // API endpoint for fetching job descriptions
  dataUrl:string="https://localhost:7278/api/JobDescription"

   // Fetch all job descriptions
  getAllJobs():Observable<any>{
    return this.http.get<any>(this.dataUrl)
  }

  // Fetch a job description by its ID
  getJobById(id:number):Observable<any>{
    let url=`${this.dataUrl}/${id}`
    return this.http.get<any>(url)
  }
}
