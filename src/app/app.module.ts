import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClockListComponent } from './components/clock/clock-list/clock-list.component';
import { ClockItemComponent } from './components/clock/clock-item/clock-item.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/clock/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockListComponent,
    ClockItemComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
