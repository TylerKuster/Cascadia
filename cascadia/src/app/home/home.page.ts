import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigurationCarouselComponent } from '../components/configuration-carousel/configuration-carousel.component';
import { CascadiaTruck } from '../models/cascadia-truck';
import { CascadiaService } from '../services/cascadia.service';
import { CascadiaOptions } from '../models/cascadia-options';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  @ViewChild('scrollingOptionsComponent', {static: false}) scrollingOptions: ConfigurationCarouselComponent;
  
  cascadiaTruck: CascadiaTruck;
  options: Array<CascadiaOptions>;
  tab: string;

  constructor(private cascadiaService: CascadiaService) {
    this.cascadiaTruck = cascadiaService.defaultCascadia;
    this.options = cascadiaService.options;
  }

  ngAfterViewInit() {
    this.selectTab(0);
  }

  // Handler called when the sub page changes
  onSubpageChange(event) {
    this.tab = event;
  }

  // Enables to select a tab of a given index and render the component below it
  selectTab(tabIndex) {
    this.tab = this.options[tabIndex].title;
  }

  updateTruckWith(value) {
    let base = "assets/"
    
    if (value.hasOwnProperty('color')) {
      this.cascadiaTruck.color = value;
    } else if (value.hasOwnProperty('aero')) { 
      this.cascadiaTruck.aero = value;
    } else if (value.hasOwnProperty('sunVisor')) { 
      this.cascadiaTruck.sunVisor = value;
    } else if (value.hasOwnProperty('trim')) { 
      this.cascadiaTruck.trim = value;
    } else if (value.hasOwnProperty('mirror')) { 
      this.cascadiaTruck.mirror = value;
    } else if (value.hasOwnProperty('bumper')) { 
      this.cascadiaTruck.bumper = value;
    }

    let colorIndex = this.cascadiaTruck.color.index;
    let aeroIndex = this.cascadiaTruck.aero.index;
    let sunVisorIndex = this.cascadiaTruck.sunVisor.index;
    let trimIndex = this.cascadiaTruck.trim.index;

    this.cascadiaTruck.path = 
      base + 
      "C" + // Color
      colorIndex + 
      "L" + // Angle
      0 +
      "A" + // Aero
      aeroIndex + 
      "S" + // Sun Visor
      // 0 +
      sunVisorIndex +
      "T" + // Trim
      // 0 +
      trimIndex +
      ".png"
  }

  reset() {
    this.cascadiaTruck = this.cascadiaService.defaultCascadia;
  }
}
