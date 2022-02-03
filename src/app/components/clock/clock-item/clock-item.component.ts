import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

import { Clock } from 'src/app/models/clock';
import { UIStyle } from 'src/app/models/uistyle';
import { ClocksService } from 'src/app/services/clocks.service';

@Component({
  selector: 'app-clock-item',
  templateUrl: './clock-item.component.html',
  styleUrls: ['./clock-item.component.css']
})
export class ClockItemComponent implements OnInit {
  @Input() Clock: Clock
  now:any;
  day: any;
  fullDate: any;
  workDay: boolean;
  @Input() UiStyle:UIStyle;
  constructor(private service:ClocksService) { 
 
  }

  ngOnInit() {
    this.refresh(this.Clock.code);
    setInterval(()=>{this.refresh(this.Clock.code)},1000*30);
  }

  refresh(code:string){
    let nowThere = moment().utc().clone().tz(code);
    this.now = nowThere.format('HH:mm');
    this.day = nowThere.format('dddd');
    this.workDay = nowThere.hour()>=8 && nowThere.hour()<18;
    this.fullDate = nowThere;
  } 
}
