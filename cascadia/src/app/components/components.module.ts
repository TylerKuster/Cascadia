import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationCarouselComponent } from './configuration-carousel/configuration-carousel.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorButtonComponent } from './color-picker/color-button/color-button.component';
import { TruckPreviewComponent } from './truck-preview/truck-preview.component';
import { AerodynamicsComponent } from './aerodynamics/aerodynamics.component';
import { SunVisorComponent } from './sun-visor/sun-visor.component';
import { TrimPackageComponent } from './trim-package/trim-package.component';
import { MirrorsComponent } from './mirrors/mirrors.component';
import { BumperComponent } from './bumper/bumper.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [
    AerodynamicsComponent,
    BumperComponent,
    ColorButtonComponent,
    ColorPickerComponent,
    ConfigurationCarouselComponent,
    MirrorsComponent,
    TrimPackageComponent,
    TruckPreviewComponent,
    SunVisorComponent,
  ],
  exports: [
    AerodynamicsComponent,
    BumperComponent,
    ColorButtonComponent,
    ColorPickerComponent,
    ConfigurationCarouselComponent,
    MirrorsComponent,
    TrimPackageComponent,
    TruckPreviewComponent,
    SunVisorComponent,
  ]
})
export class ComponentsModule { }
