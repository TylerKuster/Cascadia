import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss'],
})
export class ColorButtonComponent implements OnInit {

  @Input('color') color: string;
  @Input('isSelected') isSelected;

  constructor() { }

  ngOnInit() {

    console.log(this.isSelected)
  }

  buttonStyle() {
    let defaultStyle = { 
      'background-color': this.color,
      'outline': 'none'
    }

    let selectedStyle = { 
      'background-color': this.color, 
      'border-style': 'inset',
      'border-width': '6px',
      'border-color': 'rgba(255, 255, 255, 0.5)',
      'outline': 'none'
    }

    return this.isSelected ? selectedStyle : defaultStyle;
  }
}
