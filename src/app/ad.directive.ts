/*
    This class tells Angular where to insert components
*/

import { Directive, ViewContainerRef } from '@angular/core';

//In the @Directive decorator, notice the selector name, ad-host; that's what you use to apply the directive to the element.

@Directive({
   selector: '[ad-host]' 
})

export class AdDirective {
    //AdDirective injects ViewContainerRef to gain access to the view container of the element that will host the dynamically added component.
    constructor(public viewContainerRef: ViewContainerRef){}
}