import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CascadiaService } from 'src/app/services/cascadia.service';
import { CascadiaAeroOptions } from 'src/app/models/cascadia-options';


@Component({
  selector: 'aerodynamics',
  templateUrl: './aerodynamics.component.html',
  styleUrls: ['./aerodynamics.component.scss'],
})
export class AerodynamicsComponent implements OnInit {

  aeroOptions: Array<CascadiaAeroOptions>
  @Output('didSelectAero') didSelectAero = new EventEmitter();

  constructor(private cascadiaService: CascadiaService) {
    this.aeroOptions = cascadiaService.aeroOptions;
   }

  ngOnInit() {}

  selectCardAt(index) {
    for (const option in this.aeroOptions) {
      if (Object.prototype.hasOwnProperty.call(this.aeroOptions, option)) {
        const element = this.aeroOptions[option];
        element.isSelected = false;
      }
    }

    this.didSelectAero.emit(this.aeroOptions[index]);
  }
}
