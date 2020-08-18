import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CascadiaOptions } from 'src/app/models/cascadia-options';

@Component({
  selector: 'configuration-carousel',
  templateUrl: './configuration-carousel.component.html',
  styleUrls: ['./configuration-carousel.component.scss'],
})
export class ConfigurationCarouselComponent implements OnInit {

  @Input('options') options: Array<CascadiaOptions>;
  @Input('selectedIndex') selectedIndex = 0;
  @Input('tab') tab = '';

  @Output() selectTab = new EventEmitter();
  selectedValue = '';

  constructor() { }

  ngOnInit() {
    this.updateTab();
  }

  updateTab() {
    if(this.options !== null && this.options !== undefined && this.options.length > 0) {
      this.tab = this.options[this.selectedIndex].title;
    }
  }
  
  onSubpageChange(event) {
    console.log("changing sub page", event.detail.value)
      this.selectTab.emit(event.detail.value);
  }

}
