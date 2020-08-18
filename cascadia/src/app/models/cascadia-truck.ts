import { 
    CascadiaColorOptions, 
    CascadiaAeroOptions, 
    CascadiaSunVisorOptions, 
    CascadiaTrimPackageOptions, 
    CascadiaMirrorsOptions, 
    CascadiaBumperOptions, 
} from './cascadia-options';

export class CascadiaTruck {
    
    // Truck make
    //
    make: string;

    // Truck model
    //
    model: string;

    // Exterior color
    //
    color: CascadiaColorOptions;

    // Aero options
    //
    aero: CascadiaAeroOptions;
    
    // Sun visor options
    //
    sunVisor: CascadiaSunVisorOptions;

    // Trim options
    //
    trim: CascadiaTrimPackageOptions;

    // Mirror options
    //
    mirror: CascadiaMirrorsOptions;

    // Bumper options
    //
    bumper: CascadiaBumperOptions;
    
    // Path to configuration
    //
    path: string;
}