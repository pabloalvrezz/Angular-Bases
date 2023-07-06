
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: 0,
    name: '',
    power: 0
  }

  public saveCharacter(): void {

    if (this.character.name.length === 0) return;

    // emitimos el caracter que intoduce el usuarios
    this.onNewCharacter.emit(this.character)

    this.character = { id: 0, name: '', power: 0 };
  }
}
