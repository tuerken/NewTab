import { Component, OnInit } from '@angular/core';
import { Clock } from './models/clock';
import { UIStyle } from './models/uistyle';
import { ClocksService } from './services/clocks.service';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  uiStyle : UIStyle
  
  constructor(private service:UiService){
    var uiColorRaw =  localStorage.getItem('ui_style');
    if(uiColorRaw){
      var uiStyle = JSON.parse(uiColorRaw);
      this.uiStyle = uiStyle;
      service.changeUi(uiStyle);
    }else{
      service.changeUi(null);
    }

  }
  
  ngOnInit(){
    this.service.uiStyle.subscribe(uiStyle=>{
      this.uiStyle = uiStyle;
    });
  }
}
