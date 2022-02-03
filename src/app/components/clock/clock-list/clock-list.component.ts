import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Clock } from 'src/app/models/clock';
import { UIStyle } from 'src/app/models/uistyle';
import { ClocksService } from 'src/app/services/clocks.service';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-clock-list',
  templateUrl: './clock-list.component.html',
  styleUrls: ['./clock-list.component.css']
})
export class ClockListComponent implements OnInit {
  Clocks: Clock[];
  UiStyle: UIStyle;
  constructor(private service:ClocksService,private uiService:UiService) { }
  
  ngOnInit(): void {
    this.service.refresh();
    this.service.clocks.subscribe(data=>{
      this.Clocks = data;
    });
    this.uiService.uiStyle.subscribe(style=>{
      this.UiStyle = style;
    });
  }


}
