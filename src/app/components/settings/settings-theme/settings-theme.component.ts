import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-settings-theme',
  templateUrl: './settings-theme.component.html',
  styleUrls: ['./settings-theme.component.css']
})
export class SettingsThemeComponent implements OnInit {

  constructor(private uiService:UiService) { }

  ngOnInit(): void {
  }

  theme(theme:string){
    this.uiService.defaultTo(theme);
  }
  

}
