import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Clock } from '../models/clock';

@Injectable({
  providedIn: 'root'
})
export class ClocksService {
  STORAGE_KEY = 'new_tab_data';
  constructor() { }

  private default = [{"id":{"value":"d18e7286-52b6-8e2e-bbda-fee8c1d941cd"},"label":"📍Here","code":"Europe/Istanbul"},{"id":{"value":"754d592b-7e28-4191-edea-f78c07fcbd61"},"label":"UK","code":"Europe/London"},{"id":{"value":"fc5d0632-21fd-9342-1a12-a74836ae320a"},"label":"USA","code":"US/Central"},{"id":{"value":"98207a0a-3c7f-4a97-e504-8d5df7d1af46"},"label":"Australia","code":"Australia/Brisbane"},{"id":{"value":"858f6226-1f0e-fdd1-43fd-2aea3066af8b"},"label":"Bulgaria","code":"Europe/Sofia"},{"id":{"value":"cef376fe-124b-8f11-dd99-85c86aed31d1"},"label":"Poland","code":"Europe/Warsaw"},{"id":{"value":"860418ca-3350-8a2c-f127-a7152695488a"},"label":"Spain","code":"Europe/Madrid"},{"id":{"value":"25992a3d-8bf0-284f-367d-e4c4b3ed4c36"},"label":"Canada","code":"Canada/Eastern"},{"id":{"value":"98fae06b-7e52-45f1-e6fd-8b0545339ac2"},"label":"Sweden","code":"Europe/Stockholm"},{"id":{"value":"ab3907a4-7f01-7b72-a5aa-e6bd7d194850"},"label":"Denmark","code":"Europe/Copenhagen"},{"id":{"value":"aa5cff4a-18d9-f919-98f1-9fbd43b4503e"},"label":"Finland","code":"Europe/Helsinki"}];
  private clocksSource = new BehaviorSubject<Clock[]>([]);
  clocks = this.clocksSource.asObservable();
  changeClocks(clocks: Clock[]) {
    this.clocksSource.next(clocks.sort((a, b) => a.label.localeCompare(b.label)));
  }

  refresh() {
    var clocks = this.get();
    this.changeClocks(clocks);
  }

  addClock(clock: Clock): Observable<boolean> {
    this.add(clock);
    this.refresh();
    return of(true);
  }

  updateClock(clock: Clock): Observable<boolean> {
    this.update(clock);
    this.refresh();
    return of(true);
  }

  deleteClock(clock: Clock): Observable<boolean> {
    this.delete(clock);
    this.refresh();
    return of(true);
  }


  private get(): Clock[] {

    var result = [];

    var data = localStorage.getItem(this.STORAGE_KEY);

    if (data == undefined) {
      result = this.default;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(result));
    } else {
      try {
        result = JSON.parse(data);
      } catch (error) {
        result = this.default;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(result));
      }
      
    }

    return result;

  }

  private add(clock: Clock) {
    var existing = this.get();
    existing.push(clock);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));
  }

  private delete(clock: Clock) {
    var existing = this.get();
    existing = existing.filter(f => f.id["value"] != clock.id["value"]);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));
  }

  private update(clock: Clock) {
    var existing = this.get();
    existing.forEach(element => {
      if (element.id["value"] == clock.id["value"]) {
        element.code = clock.code;
        element.label = clock.label;
      }
    });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));
  }


}
