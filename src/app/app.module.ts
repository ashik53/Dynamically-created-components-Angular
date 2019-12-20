import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {TestComponent} from 'src/app/test.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { SinglePostComponent } from './single-post/single-post.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CreateComponent,
    ShowComponent,
    PostContainerComponent,
    SinglePostComponent,
  ],
  entryComponents: [
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
