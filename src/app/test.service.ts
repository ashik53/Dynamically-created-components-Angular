import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  private  divIds = new BehaviorSubject<any>(["one", "two"]);
  divIdsCast = this.divIds.asObservable(); 
  constructor() { }

  get_all_divs(data){
    // let temp: any = this.divIds.value;
    // // delete temp[0];
    this.divIds.next(data)
  }

  
  
}
