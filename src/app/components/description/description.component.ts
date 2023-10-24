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
    private route:Router
  ) {}
  jobId: string | null = '';
  job: any = {};
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.jobId = param.get('id');
    });
    if (this.jobId != null)
      this.jobService.getJobById(parseInt(this.jobId)).subscribe((data) => {
        this.job = data;
      });
  }
  apply(){
    if (this.jobId != null)
    localStorage.setItem('jobId',this.jobId)
  this.route.navigate(['/apply'])

  }
}
