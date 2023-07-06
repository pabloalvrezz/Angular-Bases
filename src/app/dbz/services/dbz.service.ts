import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  }, {
    id: uuid(),
    name: 'Vegetta',
    power: 3500,
  }];

  // metodo que usaremos para añadir un caracter al vector de estos
  public addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(character);
  }

  // metodo que usaremos para eliminare desde la posicion que nos digan un solo elemento
  public deleteById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
