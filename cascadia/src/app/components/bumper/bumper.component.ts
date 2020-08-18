import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CascadiaBumperOptions } from 'src/app/models/cascadia-options';
import { CascadiaService } from 'src/app/services/cascadia.service';

@Component({
  selector: 'bumper',
  templateUrl: './bumper.component.html',
  styleUrls: ['./bumper.component.scss'],
})
export class BumperComponent implements OnInit {

  bumperOptions: Array<CascadiaBumperOptions>
  @Output('didSelectBumper') didSelectBumper = new EventEmitter();

  constructor(private cascadiaService: CascadiaService) { 
    this.bumperOptions = cascadiaService.bumperOptions;
  }

  ngOnInit() {}

  selectCardAt(index) {
    for (const option in this.bumperOptions) {
      if (Object.prototype.hasOwnProperty.call(this.bumperOptions, option)) {
        const element = this.bumperOptions[option];
        element.isSelected = false;
      }
    }

    this.didSelectBumper.emit(this.bumperOptions[index]);
  }
}
