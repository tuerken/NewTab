import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockListComponent } from './components/clock/clock-list/clock-list.component';
import { ClockItemComponent } from './components/clock/clock-item/clock-item.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsTabsComponent } from './components/settings/settings-tabs/settings-tabs.component';
import { SettingsClocksComponent } from './components/settings/settings-clocks/settings-clocks.component';
import { SettingsThemeComponent } from './components/settings/settings-theme/settings-theme.component';
import { SettingsPageComponent } from './components/settings/settings-page/settings-page.component';
import { SettingsDataComponent } from './components/settings/settings-data/settings-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockListComponent,
    ClockItemComponent,
    SettingsComponent,
    SettingsTabsComponent,
    SettingsClocksComponent,
    SettingsThemeComponent,
    SettingsPageComponent,
    SettingsDataComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
