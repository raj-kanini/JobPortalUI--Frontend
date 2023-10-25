import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetailService } from 'src/app/services/job-detail.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  constructor(
    private jobService: JobDetailService,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) {}

  // Variables to store job details
  jobId: string | null = '';
  job: any = {};

  ngOnInit(): void {
    // Retrieve the job ID from the route parameter
    this.activateRoute.paramMap.subscribe((param) => {
      this.jobId = param.get('id');
    });

    // Fetch job details from the service using the job ID
    if (this.jobId != null)
      this.jobService.getJobById(parseInt(this.jobId)).subscribe((data) => {
        this.job = data;
      });
  }
  // Function to handle the job application process
  apply() {
    if (this.jobId != null)
      // Store the job ID in local storage
      localStorage.setItem('jobId', this.jobId);
    this.route.navigate(['/apply']); // Redirect to the 'apply' route for job application
  }
}
