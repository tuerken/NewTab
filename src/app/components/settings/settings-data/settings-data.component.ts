import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-settings-data',
  templateUrl: './settings-data.component.html',
  styleUrls: ['./settings-data.component.css']
})
export class SettingsDataComponent implements OnInit {
  uiData:string
  clockData:string
  constructor() { }

  ngOnInit(): void {
    this.uiData = localStorage.getItem('ui_style');
    this.clockData = localStorage.getItem('new_tab_data');
  }

    update(){
      localStorage.setItem('ui_style', this.uiData);
      localStorage.setItem('new_tab_data', this.clockData);
    }
}
