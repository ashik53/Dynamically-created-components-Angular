import { Type } from '@angular/core'

export class AdItem {
    //first parameter takes component name, second takes info from 
    constructor(public component: Type<any>, public data: any) {
        
    }
}