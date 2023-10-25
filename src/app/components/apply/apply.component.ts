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
  
  // An object to store candidate details with initial values
  candidateDetail:any= {
    name: "",
    emailAddress: "",
    experience: "",
    about: "",
    pdf: "",
    location: "",
    jobId:1 // Default job ID
  }

  ngOnInit(): void {
     // Retrieve the job ID from local storage if available
    let jobIdd=localStorage.getItem('jobId')
    if(jobIdd!=null){
      this.candidateDetail.jobId=parseInt(jobIdd)
    }
  }

  // Function to submit the candidate application form
  submitForm() {
    this.registerCandidateService.registerUser(this.candidateDetail).subscribe((res)=>{
      console.log("applied successfully")
    },(error)=>{
      console.log(error)
    })

    // Redirect to the 'thanks' route upon successful form submission
    this.route.navigate(['/thanks'])

  }
}
