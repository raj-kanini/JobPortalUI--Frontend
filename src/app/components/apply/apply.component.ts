import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterCandidateService } from 'src/app/services/register-candidate.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  constructor(private route:Router,private registerCandidateService:RegisterCandidateService) {}
  candidateDetail:any= {
    name: "",
    emailAddress: "",
    experience: "",
    about: "",
    pdf: "",
    location: "",
    jobId:1
  }

  ngOnInit(): void {
    let jobIdd=localStorage.getItem('jobId')
    if(jobIdd!=null){
      this.candidateDetail.jobId=parseInt(jobIdd)
    }
  }
  submitForm() {
    this.registerCandidateService.registerUser(this.candidateDetail).subscribe((res)=>{
      console.log("applied successfully")
    },(error)=>{
      console.log(error)
    })
    this.route.navigate(['/thanks'])

  }
}
