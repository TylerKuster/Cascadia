import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CascadiaService } from 'src/app/services/cascadia.service';
import { CascadiaColorOptions } from 'src/app/models/cascadia-options';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {

  colors: Array<CascadiaColorOptions>;
  @Input('selectedColor') selectedColor = 0;
  @Output('didSelectColor') didSelectColor = new EventEmitter();

  constructor(private cascadiaService: CascadiaService) { 
    this.colors = cascadiaService.defaultColorsArray;
  }

  selectColorAt(index) {
    for (const color in this.colors) {
      if (Object.prototype.hasOwnProperty.call(this.colors, color)) {
        const element = this.colors[color];
        element.isSelected = false;
      }
    }

    this.didSelectColor.emit(this.colors[index])
  }
}
