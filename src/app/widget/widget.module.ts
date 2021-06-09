import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetAboutComponent } from './widget-about/widget-about.component';
import { WidgetJobsComponent } from './widget-jobs/widget-jobs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetAboutComponent,WidgetJobsComponent],
  exports:[WidgetAboutComponent,WidgetJobsComponent]
})
export class WidgetModule { }
