import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CascadiaTrimPackageOptions } from 'src/app/models/cascadia-options';
import { CascadiaService } from 'src/app/services/cascadia.service';

@Component({
  selector: 'trim-package',
  templateUrl: './trim-package.component.html',
  styleUrls: ['./trim-package.component.scss'],
})
export class TrimPackageComponent implements OnInit {

  trimOptions: Array<CascadiaTrimPackageOptions>
  @Output('didSelectTrim') didSelectTrim = new EventEmitter();

  constructor(private cascadiaService: CascadiaService) { 
    this.trimOptions = cascadiaService.trimPackageOptions;
  }

  ngOnInit() {}

  selectCardAt(index) {
    for (const option in this.trimOptions) {
      if (Object.prototype.hasOwnProperty.call(this.trimOptions, option)) {
        const element = this.trimOptions[option];
        element.isSelected = false;
      }
    }

    this.didSelectTrim.emit(this.trimOptions[index]);
  }
}
