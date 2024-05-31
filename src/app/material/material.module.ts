import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { 

 } from '@angular/material';

 import {MatCardModule} from '@angular/material/card';


 const material = [
  MatCardModule
];



@NgModule({
  declarations: [],
  exports:[material],
  imports: [
    material
  ]
})
export class MaterialModule { }
