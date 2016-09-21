import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TwoComponent ],
  bootstrap:    [ AppComponent, TwoComponent ]
})
export class AppModule { }
