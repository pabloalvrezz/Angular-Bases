import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: 0,
    name: 'Trunks',
    power: 100
  }];

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter()


  onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(index);
  }
}
