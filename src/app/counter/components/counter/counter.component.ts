import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter : {{count}}</h3>

  <button (click)="changeCountBy(1)">+1</button>
  <button (click)="changeCountBy(0)">Reset</button>
  <button (click)="changeCountBy(-1)">-1</button>

  `
})

export class CounterComponent {
  constructor() { }

  public count: number = 10;

  changeCountBy(value: number): void {
    if (value == 0) this.count = 0;
    else this.count += value;

  }

}
