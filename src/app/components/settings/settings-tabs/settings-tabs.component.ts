import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-tabs',
  templateUrl: './settings-tabs.component.html',
  styleUrls: ['./settings-tabs.component.css']
})
export class SettingsTabsComponent implements OnInit {

  @Input() showData:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
