import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { GestureController, Gesture } from '@ionic/angular';
import { CascadiaTruck } from 'src/app/models/cascadia-truck';
import { Observable } from 'rxjs';
import { CascadiaService } from 'src/app/services/cascadia.service';

@Component({
  selector: 'truck-preview',
  templateUrl: './truck-preview.component.html',
  styleUrls: ['./truck-preview.component.scss'],
})
export class TruckPreviewComponent implements OnInit {

  @Input('truck') truck: CascadiaTruck;
  @ViewChild("truckPreview", { read: ElementRef, static: true })
  truckPreview: ElementRef;

  constructor(public gestureCtrl: GestureController, private cascadiaService: CascadiaService) {
    this.truck = cascadiaService.defaultCascadia;
  }

  ngOnInit() {}

  async ngAfterViewInit() {
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.truckPreview.nativeElement,
      threshold: 5,
      gesturePriority: 0,
      gestureName: 'truckPreview',
      passive: false,
      onStart: ev => { console.log("ok")},
      onMove: ev => {console.log("tbd", this.truck.color.color)}
    }, true);
    // The `true` above ensures that callbacks run inside NgZone.

    gesture.enable(true);
  }
}
