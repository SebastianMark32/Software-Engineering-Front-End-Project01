import { format, startOfDay } from 'date-fns';
import { setMinutes, setHours } from 'date-fns';
import {  Component, OnInit} from '@angular/core';
import { CalendarView, CalendarEvent, DateFormatterParams } from 'angular-calendar';


@Component({
  selector: 'app-scheduler-comp',
  templateUrl: './scheduler-comp.component.html',
  styleUrls: ['./scheduler-comp.component.scss']
})
export class SchedulerCompComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  events: CalendarEvent[] =[
    {
      start: setHours(setMinutes(new Date(), 0), 15),
      end: setHours(setMinutes(new Date(), 40), 17),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }

}
