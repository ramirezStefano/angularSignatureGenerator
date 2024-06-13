import { Component, Input } from '@angular/core';
import { FieldOptionsComponent } from '../field-options/field-options.component';

@Component({
  selector: 'app-special-input',
  standalone: true,
  imports: [FieldOptionsComponent],
  template: `
    <div class="container">
      <div>
        <p>{{ variant }}</p>
      </div>
      <div class="special-input">
        <input />
        <app-field-options></app-field-options>
      </div>
    </div>
  `,
  styleUrl: './special-input.component.css',
})
export class SpecialInputComponent {
  @Input() variant: string | undefined;
}
