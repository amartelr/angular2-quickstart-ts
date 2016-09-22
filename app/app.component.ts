import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  numberOfUsers: number = 99;

  onButtonClick(event) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
  }

  onSpacePress(event) {
    console.log(event);
  }
}
