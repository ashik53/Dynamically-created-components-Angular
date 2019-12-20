import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  divIds: any = ["one", "two"]
  divId: string;
  constructor(private testService: TestService) { 

  }

  ngOnInit() {
    

  }

  create_new_div(){
    this.divIds.push(this.divId)
    console.log(this.divIds);
    this.testService.get_all_divs(this.divIds);
  }

}
