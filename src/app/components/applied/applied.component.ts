import { Component, OnInit } from '@angular/core';
import { JobDetailService } from 'src/app/services/job-detail.service';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css'],
})
export class AppliedComponent implements OnInit {
  constructor(private jobService: JobDetailService) {}
  jobs: any[] = [];
  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  shortName(s: string) {
    let arr: any[] = s.split(' ');
    let shortName = '';
    if (arr.length >= 2) {
      for (let i = 0; i < 2; i++) {
        shortName += arr[i][0];
      }
      return shortName;
    } else {
      return 'JD';
    }
  }
}
