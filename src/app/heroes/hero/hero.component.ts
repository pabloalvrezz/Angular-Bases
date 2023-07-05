import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Thor'
  }

  changeAge():void{
    this.age = 33
  }

  resertForm():void{
    this.name='Ironman'
    this.age=45
  }
}
