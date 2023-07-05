import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './app-heroes-list.component.html',
  styleUrls: ['./app-heroes-list.component.css']
})
export class AppHeroesListComponent {

  public heroNames: string[] = ['Spiderman', 'Thor', 'Ironman','Hulk', 'Batman', 'CatWoman']
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();

  }
}
