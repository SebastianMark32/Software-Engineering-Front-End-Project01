import { format, setDate, startOfDay } from 'date-fns';
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
      start: setHours(setMinutes(new Date(), 0), 8),
      end: setHours(setMinutes(new Date(), 0), 10),
      title: 'Ham Breakfast',
    },
    {
      start: setHours(setMinutes(new Date(), 0), 11),
      end: setHours(setMinutes(new Date(), 0), 14),
      title: 'Ham Lunch',
    },
    {
      start: setHours(setMinutes(new Date(), 30), 16),
      end: setHours(setMinutes(new Date(), 30), 19),
      title: 'Ham Dinner',
    },
    {
      start: setDate(setHours(setMinutes(new Date(),45),13),17),
      end:  setDate(setHours(setMinutes(new Date(),45),14),17),
      title: 'test',
    }
  ]

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }

}