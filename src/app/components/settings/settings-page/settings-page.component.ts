import { Component, Input, OnInit } from '@angular/core';
import { UIStyle } from 'src/app/models/uistyle';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  @Input() UiStyle: UIStyle;
  constructor(private uiService:UiService) { }

  ngOnInit(): void {
  }
  update(){
    this.uiService.changeUi(this.UiStyle);
  }
}
