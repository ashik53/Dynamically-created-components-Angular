import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TestService } from 'src/app/test.service'
import Sortable from 'sortablejs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  simpleInput: string;

  allDivs: any;;
  constructor(private testService: TestService) {

  }
  ngOnInit() {
    this.testService.divIdsCast.subscribe(result => {
      this.allDivs = result;
      
    })
  }

  


  showDivs() {
    
    let x = document.getElementById("mainDiv");
    Sortable.create(x, {
      onEnd: function (evt) {
        console.log(evt)
      }
    })
    //this.testService.call_sortable(true);
  }



}
