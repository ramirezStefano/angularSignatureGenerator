import { Component, NgModule } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-color-picker-popover',
  standalone: true,
  imports: [],
  templateUrl: './color-picker-popover.component.html',
//   template:`
//   <div class="popover">
//     <h3>Pick a Color</h3>
//     <input type="color" id="head" name="head" value="#e66465" />
//     <div class="colors">
//         <div  *ngFor="let color in colors" class="color" [style.background] = "color" (click)="selectColor"></div>

//     </div>
// </div>
//   `
  styleUrl: './color-picker-popover.component.css'
})
export class ColorPickerPopoverComponent {
  colors: string[] = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
  selectedColor:string = "";

  selectColor (color:string) {
    this.selectedColor = color;
  }

}
