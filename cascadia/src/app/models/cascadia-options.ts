export class CascadiaOptions {
    title: string;
    icon: string;
}

export class CascadiaColorOptions {

    // Used to determine the selected color
    //
    index: number;

    // Hex decimal color code
    //
    color: string;

    // Used to determine the state of the button
    //
    isSelected? = false;
}

export class CascadiaAeroOptions {

    // Used to determine the selected option
    //
    index: number;

    // Type of aero
    //
    aero: string;

    // Source image path
    //
    src: string;

    // Used to determine the state of the button
    //
    isSelected? = false;
}

export class CascadiaSunVisorOptions {

    // Used to determine the selected option
    //
    index: number;

    // Optional sun visor
    //
    sunVisor: string;

    // Source image path
    //
    src: string;

    // Used to determine the state of the button
    //
    isSelected? = false;
}

export class CascadiaTrimPackageOptions {

    // Used to determine the selected option
    //
    index: number;

    // Optional trim
    //
    trim: string;

    // Source image path
    //
    src: string;

    // Used to determine the state of the button
    //
    isSelected? = false;
}

export class CascadiaMirrorsOptions {

    // Used to determine the selected option
    //
    index: number;

    // Mirror location
    //
    mirror: string;

    // Source image path
    //
    src: string;

    // Used to determine the state of the button
    //
    isSelected? = false;
}

export class CascadiaBumperOptions {

    // Used to determine the selected option
    //
    index: number;

    // Type of bumper
    //
    bumper: string;

    // Source image path
    //
    src: string;
    
    // Used to determine the state of the button
    //
    isSelected? = false;
}