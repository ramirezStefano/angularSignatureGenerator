import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPickerPopoverComponent } from './color-picker-popover/color-picker-popover.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorPickerPopoverComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signatureGenerator';
}
