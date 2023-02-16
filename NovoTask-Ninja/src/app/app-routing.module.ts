import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulerPageComponent } from './components/scheduler-page/scheduler-page.component';
import { ResourcesPageComponent } from './components/resources-page/resources-page.component';
import { TimerPageComponent } from './components/timer-page/timer-page.component';

const routes: Routes = [
  { path: "", component: SchedulerPageComponent },
  { path: "resources", component: ResourcesPageComponent },
  { path: "timer", component: TimerPageComponent },


  { path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
