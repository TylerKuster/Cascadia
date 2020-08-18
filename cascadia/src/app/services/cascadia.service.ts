import { Injectable } from '@angular/core';
import { CascadiaTruck } from '../models/cascadia-truck';
import { CascadiaOptions, CascadiaAeroOptions, CascadiaColorOptions, CascadiaBumperOptions, CascadiaSunVisorOptions, CascadiaTrimPackageOptions, CascadiaMirrorsOptions } from '../models/cascadia-options';

@Injectable({
  providedIn: 'root'
})
export class CascadiaService {

  constructor() { }

  get defaultCascadia(): CascadiaTruck {
    let cascadia = new CascadiaTruck();
    cascadia.make = "Freightliner Cascadia";
    cascadia.model = '126" BBC 72" RR';
    cascadia.color = this.defaultColorsArray[0];
    cascadia.aero = this.aeroOptions[0];
    cascadia.sunVisor = this.sunVisorOptions[0];
    cascadia.mirror = this.mirrorPackageOptions[0];
    cascadia.trim = this.trimPackageOptions[0];
    cascadia.bumper = this.bumperOptions[0];
    cascadia.path = "assets/C0L0A0S0T0.png";
    
    return cascadia;
  }

  get options(): Array<CascadiaOptions> {
    return [
      { title: "Color", icon: "color-fill"},
      { title: "Aerodynamics", icon: "send" },
      { title: "Sun Visor", icon: "glasses" },
      { title: "Trim Package", icon: "ice-cream" },
      { title: "Mirrors", icon: "star-half" },
      { title: "Bumper", icon: "grid" },
    ]
  }

  get aeroOptions(): Array<CascadiaAeroOptions> {
    return [
      { 
        aero: "None",
        index: 0,
        src: "assets/options/aero_off.jpeg",
      },
      { 
        aero: "Aero",
        index: 1,
        src: "assets/options/aero_1.jpeg",
      },
      { 
        aero: "Advanced Aero",
        index: 2,
        src: "assets/options/aero_2.jpeg",
      }
    ]
  }

  get sunVisorOptions(): Array<CascadiaSunVisorOptions> {
    return [
      { 
        sunVisor: "None",
        index: 0,
        src: "assets/options/aero_off.jpeg",
      },
      { 
        sunVisor: "Equipped",
        index: 1,
        src: "assets/options/visor_on.jpeg",
      }
    ]
  }

  get trimPackageOptions(): Array<CascadiaTrimPackageOptions> {
    return [
      { 
        trim: "None",
        index: 0,
        src: "assets/options/black_finish.jpeg",
      },
      { 
        trim: "Elite Equipped",
        index: 1,
        src: "assets/options/bright_finish.jpeg",
      }
    ]
  }

  get mirrorPackageOptions(): Array<CascadiaMirrorsOptions> {
    return [
      { 
        mirror: "Door",
        index: 0,
        src: "assets/options/black_finish.jpeg",
      },
      { 
        mirror: "Door and Hood",
        index: 1,
        src: "assets/options/bright_finish.jpeg",
      }
    ]
  }

  get bumperOptions(): Array<CascadiaBumperOptions> {
    return [
      { 
        bumper: "Mold-In",
        index: 0,
        src: "assets/options/aero_1.jpeg",
      },
      { 
        bumper: "Painted",
        index: 1,
        src: "assets/options/aero_2.jpeg",
      }
    ]
  }

  get defaultColorsArray(): Array<CascadiaColorOptions> {
    return [
      {
        index: 0,
        color: "#5E8097",
        isSelected: true
      },
      {
        index: 1,
        color: "#616464"
      },
      {
        index: 2,
        color: "#0F0F0F"
      },
      {
        index: 3,
        color: "#0E4D66"
      },
      {
        index: 4,
        color: "#1178A7"
      },
      {
        index: 5,
        color: "#194377"
      },
      {
        index: 6,
        color: "#15345D"
      },
      {
        index: 7,
        color: "#0BC0DD"
      },
      {
        index: 8,
        color: "#513216"
      },
      {
        index: 9,
        color: "#B9AEA0"
      },
      {
        index: 10,
        color: "#ED1B2C"
      },
      {
        index: 11,
        color: "#B02026"
      },
      {
        index: 12,
        color: "#F15421"
      },
      {
        index: 13,
        color: "#FECB02"
      },
      {
        index: 14,
        color: "#DBE244"
      },
      {
        index: 15,
        color: "#4D8B41"
      },
      {
        index: 16,
        color: "#8765AC"
      }
    ];
  }
}