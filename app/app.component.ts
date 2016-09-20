import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Mi Primera App Angular 2</h1>
    <h2>{{numberOfUsers}} users</h2>
    `
})
export class AppComponent { 
  numberOfUsers: number = 99;

}
