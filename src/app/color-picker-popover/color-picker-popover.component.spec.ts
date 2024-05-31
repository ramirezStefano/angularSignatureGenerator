import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerPopoverComponent } from './color-picker-popover.component';

describe('ColorPickerPopoverComponent', () => {
  let component: ColorPickerPopoverComponent;
  let fixture: ComponentFixture<ColorPickerPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerPopoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPickerPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
