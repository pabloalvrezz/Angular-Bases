import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    id: 1,
    name: 'Krillin',
    power: 1000
  }, {
    id: 2,
    name: 'Goku',
    power: 9500
  }, {
    id: 3,
    name: 'Vegetta',
    power: 3500
  }];

  public onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  public onDeleteCharacter(index: number): void {
    // eliminaremos desde la posicion que nos digan un solo elemento
    this.characters.splice(index, 1)
  }
}
