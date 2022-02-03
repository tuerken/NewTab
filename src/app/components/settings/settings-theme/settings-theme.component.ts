import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-settings-theme',
  templateUrl: './settings-theme.component.html',
  styleUrls: ['./settings-theme.component.css']
})
export class SettingsThemeComponent implements OnInit {
  current:string = '☀️'
  constructor(private uiService:UiService) { }

  ngOnInit(): void {
  }

  theme(theme:string){
    this.uiService.defaultTo(theme);
  }
  
  toggle(){
    if(this.current == '☀️'){
      this.current = '🌙';
    }else{
      this.current = '☀️';
    }
    this.theme(this.current);
  
  }

}
