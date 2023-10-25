import { Component, OnInit } from '@angular/core';
import { JobDetailService } from 'src/app/services/job-detail.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private jobService: JobDetailService) {}

  // An array to store job data
  jobs: any[] = [];
  ngOnInit(): void {
    // Fetch and subscribe to job data from the service
    this.jobService.getAllJobs().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Function to generate a short name from a given string
  shortName(s: string) {
    let arr: any[] = s.split(' ');
    let shortName = '';
    if (arr.length >= 2) {
      for (let i = 0; i < 2; i++) {
        shortName += arr[i][0];
      }
      return shortName;
    } else {
      return 'JD'; // Default value if there are not enough words
    }
  }
}
