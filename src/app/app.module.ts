import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatAutocompleteModule}from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips'
import { NavigationComponent } from "./components/navigation/navigation.component";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerPageComponent } from './components/scheduler-page/scheduler-page.component';
import { TimerPageComponent } from './components/timer-page/timer-page.component';
import { ResourcesPageComponent } from './components/resources-page/resources-page.component';
import { SchedulerCompComponent } from './components/scheduler-comp/scheduler-comp.component';
import { TimerPartComponent } from './components/timer-part/timer-part.component';
import { ClassTodoComponent } from './components/class-todo/class-todo.component';
import { JobTodoComponent } from './components/job-todo/job-todo.component';
import { ThesisTodoComponent } from './components/thesis-todo/thesis-todo.component';
import { MemeComponent } from './components/meme/meme.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SchedulerPageComponent,
    TimerPageComponent,
    TimerPartComponent,
    ResourcesPageComponent,
    SchedulerCompComponent,
    ClassTodoComponent,
    JobTodoComponent,
    ThesisTodoComponent,
    MemeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
