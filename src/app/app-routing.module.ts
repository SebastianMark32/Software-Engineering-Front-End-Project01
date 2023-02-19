import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulerPageComponent } from './components/scheduler-page/scheduler-page.component';
import { ResourcesPageComponent } from './components/resources-page/resources-page.component';
import { TimerPageComponent } from './components/timer-page/timer-page.component';
import { MemeComponent } from './components/meme/meme.component';
import { KayakComponent } from './components/kayak/kayak.component';


const routes: Routes = [
  { path: "", component: SchedulerPageComponent },
  { path: "resources", component: ResourcesPageComponent },
  { path: "timer", component: TimerPageComponent },
  { path: "meme", component: MemeComponent },
  { path: "kayak", component: KayakComponent },

  { path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
