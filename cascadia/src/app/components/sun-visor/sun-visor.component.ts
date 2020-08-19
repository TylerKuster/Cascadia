import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CascadiaSunVisorOptions } from 'src/app/models/cascadia-options';
import { CascadiaService } from 'src/app/services/cascadia.service';

@Component({
  selector: 'sun-visor',
  templateUrl: './sun-visor.component.html',
  styleUrls: ['./sun-visor.component.scss'],
})
export class SunVisorComponent implements OnInit {

  sunVisorOptions: Array<CascadiaSunVisorOptions>
  @Output('didSelectSunVisor') didSelectSunVisor = new EventEmitter();

  constructor(private cascadiaService: CascadiaService) {
    this.sunVisorOptions = cascadiaService.sunVisorOptions;
   }

  ngOnInit() {}

  selectCardAt(index) {
    for (const option in this.sunVisorOptions) {
      if (Object.prototype.hasOwnProperty.call(this.sunVisorOptions, option)) {
        const element = this.sunVisorOptions[option];
        element.isSelected = false;
      }
    }

    this.didSelectSunVisor.emit(this.sunVisorOptions[index]);
  }
}
