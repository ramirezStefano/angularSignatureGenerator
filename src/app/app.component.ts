import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPickerPopoverComponent } from './color-picker-popover/color-picker-popover.component';
import { HeaderComponent } from './header/header.component';
import { SpecialInputComponent } from './special-input/special-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ColorPickerPopoverComponent,
    HeaderComponent,
    SpecialInputComponent,
  ],
  // templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    @for (variant of variants; track variant) {
      <app-special-input [variant]="variant"></app-special-input>
    }
    <router-outlet />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signatureGenerator';
  variants = [
    'Name',
    'Title',
    'Company',
    'Email',
    'Phone',
    'LinkedIn',
    'Image URL',
  ];
}
