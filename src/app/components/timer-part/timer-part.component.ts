import { Component} from '@angular/core';



@Component({
  selector: 'app-timer-part',
  templateUrl: './timer-part.component.html',
  styleUrls: ['./timer-part.component.scss']
})
export class TimerPartComponent {
  ngOnInit(){
    import("./timer.js" as any);
  }
}
