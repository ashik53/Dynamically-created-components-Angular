import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-show',
  template:`
  
  
    <div> {{divInfo }}</div>
  
  
 `,
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() divInfo;
  constructor() { }

  ngOnInit() {
  }

}
