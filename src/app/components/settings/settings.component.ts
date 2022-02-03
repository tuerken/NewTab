import { Component, Input, OnInit } from '@angular/core';
import { Clock } from 'src/app/models/clock';
import { UIStyle } from 'src/app/models/uistyle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input()Clocks: Clock[];
  @Input() UiStyle: UIStyle;
  showData: boolean =false;
  constructor() { }
  
  ngOnInit(): void {
    
  }



}
