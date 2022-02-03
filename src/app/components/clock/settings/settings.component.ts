import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Clock } from 'src/app/models/clock';
import { UIStyle } from 'src/app/models/uistyle';
import { ClocksService } from 'src/app/services/clocks.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input()Clocks: Clock[];
  @Input() UiStyle: UIStyle;
  
  constructor(private service:ClocksService,private uiService:UiService) { }
  

  ngOnInit(): void {
    
  }

  updateColor(){
    setTimeout(()=>{this.uiService.changeUi(this.UiStyle);},0);
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
      this.updateColor();
    });
  }
  theme(theme:string){
    this.uiService.defaultTo(theme);
  }
  
}
