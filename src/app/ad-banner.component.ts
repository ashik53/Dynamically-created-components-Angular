import { OnInit, Input, ViewChild, Component, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
    selector: 'app-ad-banner',
    template:
    `
    <div class="ad-banner-example">
        <h3> Advertisements</h3>
        <!-- we will render ad propertices comes from ad.service.ts  -->
        <ng-template ad-host> </ng-template> <!-- 'ad-host' selects the directive and use 'view component ref'  -->
    </div>
`
})

export class AdBannerComponent implements OnInit {
    
    @Input() ads: AdItem[];

    @ViewChild(AdDirective, { static: true }) adHost: AdDirective;

    interval: any;
    currentAdIndex = -1;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }
    
    ngOnDestroy() {
        clearInterval(this.interval)
    }

    loadComponent() {
        
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];

        //this line takes 'component-name' to get the dynamic reference
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        //ViewContainerRef comes from ad.directive.ts
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);

        /*
            display the 'addvertisement data' via Adcomponent interface
            
            firstly push the data in the specific component, then the component will show the data via its template 
        */
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }

}//class