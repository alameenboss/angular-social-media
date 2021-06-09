import { Component, OnInit } from '@angular/core';
import { TopJobsVM } from 'src/model/TopJobsVM';
import { HomeService } from 'src/service/home.service';

@Component({
  selector: 'app-widget-jobs',
  templateUrl: './widget-jobs.component.html'
})
export class WidgetJobsComponent implements OnInit {
title:String;
topJobs:TopJobsVM[];
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.title ="Top Jobs";
   this.topJobs = this.homeService.GetTopJobs();
  }

}
