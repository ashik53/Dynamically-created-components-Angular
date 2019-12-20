import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {SinglePostComponent} from 'src/app/single-post/single-post.component'

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit, AfterContentInit{
  //container read as ViewContainerRef, ViewContainerRef is used to create component

  //static true because container reference must get at compile time
  @ViewChild('container', {read: ViewContainerRef,static:true}) container

  /*
    resolver has a method named 'resolveComponentFactory()' which takes a component as an argument, see implementation below
  */
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  /*
    In order to create dyanmic components we need another life cycle hook named 'AfterContentInit'
    ngAfterContentInit is called when a directive content is fully initialized
  */

  ngAfterContentInit(){
    //createComponent is a method,its need's an argument of 'ComponentFactory', to add this we need resolver first, declared it on constructor
    
    /*
      SinglePostComponent should be added on the entryComponents of app.module.ts, it helps us to 'dynamically add components'
    */
    const singlePostFactory = this.resolver.resolveComponentFactory(SinglePostComponent);
    this.container.createComponent(singlePostFactory)

    //we can create the component again using the factory(singlePostFactory)
    this.container.createComponent(singlePostFactory);
    //in order to differentiate we have to use 'postTitle' variable of 'SinglePostComponent'  , you should use a reference
    const singlePostRef = this.container.createComponent(singlePostFactory)
    singlePostRef.instance.postTitle = "Dynamic title"; 

    console.log("comes")
  }

}
