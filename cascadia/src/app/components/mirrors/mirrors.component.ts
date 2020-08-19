import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CascadiaMirrorsOptions } from 'src/app/models/cascadia-options';
import { CascadiaService } from 'src/app/services/cascadia.service';

@Component({
  selector: 'mirrors',
  templateUrl: './mirrors.component.html',
  styleUrls: ['./mirrors.component.scss'],
})
export class MirrorsComponent implements OnInit {

  mirrorOptions: Array<CascadiaMirrorsOptions>
  @Output('didSelectMirror') didSelectMirror = new EventEmitter();
  
  constructor(private cascadiaService: CascadiaService) { 
    this.mirrorOptions = cascadiaService.mirrorPackageOptions;
  }

  ngOnInit() {}

  selectCardAt(index) {
    for (const option in this.mirrorOptions) {
      if (Object.prototype.hasOwnProperty.call(this.mirrorOptions, option)) {
        const element = this.mirrorOptions[option];
        element.isSelected = false;
      }
    }

    this.didSelectMirror.emit(this.mirrorOptions[index]);
  }
}
