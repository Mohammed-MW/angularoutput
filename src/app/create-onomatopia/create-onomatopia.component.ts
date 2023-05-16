import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent {


  @Input() newOnomatopia !: string;

  @Output() sendOnomatopiaToParent = new EventEmitter<string>;

  public createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

}
