import { Component } from '@angular/core';

@Component({
  selector: 'app-field-options',
  standalone: true,
  imports: [],
  templateUrl: './field-options.component.html',
  styleUrl: './field-options.component.css',
})
export class FieldOptionsComponent {
  boldState: boolean = false;
  italicsState: boolean = false;

  changeBold() {
    this.boldState = !this.boldState;
  }
  changeItalics() {
    this.italicsState = !this.italicsState;
  }
}
