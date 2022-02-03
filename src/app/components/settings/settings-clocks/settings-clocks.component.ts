import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Clock } from 'src/app/models/clock';
import { UIStyle } from 'src/app/models/uistyle';
import { ClocksService } from 'src/app/services/clocks.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-settings-clocks',
  templateUrl: './settings-clocks.component.html',
  styleUrls: ['./settings-clocks.component.css']
})
export class SettingsClocksComponent implements OnInit {
  @Input()Clocks: Clock[];
  @Input() UiStyle: UIStyle;
  
  constructor(private service:ClocksService,private uiService:UiService) { }

  ngOnInit(): void {
  }
  add(){
    this.Clocks = [];
    this.service.addClock({id:Guid.create(), label:"🕒",code:"UTC"}).subscribe(()=>{
    
    });
  }

  delete(clock:Clock){
    this.Clocks = [];
    this.service.deleteClock(clock).subscribe(()=>{
      
    });
  }
  update(clock:Clock){
    this.Clocks = [];
    this.service.updateClock(clock).subscribe(()=>{
  
    });
  }
}
