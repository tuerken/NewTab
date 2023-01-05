import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UIStyle as UIStyle } from '../models/uistyle';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  private defaultDark =  {"background":"#1c1c1c","foreground":"#4a4a4a","workday":"#e6c81e","zoom":1,"marginTop":"17%","workStart":9,"workEnd":17};
 
  private defaultLight = {"background":"#e6e6e6","foreground":"#d1d1d1","workday":"#13530e","zoom":1,"marginTop":"17%","workStart":9,"workEnd":17}

  private uiStyleSource = new BehaviorSubject<UIStyle>(this.defaultDark);

  uiStyle = this.uiStyleSource.asObservable();
  changeUi(uiStyle: UIStyle){

    if(uiStyle==null){
      this.defaultTo('🌜');
    }

    this.uiStyleSource.next(uiStyle);

    try {
      this.updateBody(uiStyle);
    } catch (error) {
    setTimeout(() => {
      this.updateBody(uiStyle);
    }, 0);  
    }
  }

  private updateBody(uiStyle: UIStyle){
     document.body.style.backgroundColor = uiStyle.background;
      localStorage.setItem('ui_style',JSON.stringify(uiStyle));
  }

  defaultTo(theme:string){
    switch(theme){
      case "☀️": this.changeUi(this.defaultLight);break;
      case "🌜":  this.changeUi(this.defaultDark); break;
      default: this.changeUi(this.defaultDark); break;
    }
  }
 
  
}
