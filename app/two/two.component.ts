import { Component, OnInit } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'my-two',
   templateUrl: './two.component.html',
   styleUrls: ['./two.component.css']

})
export class TwoComponent implements OnInit {
   constructor() { }
   items: any[];
   total: number = 1;
   ngOnInit() { }

   refreshList() {
      this.items = [{ name: 'Madrid' }, { name: 'Las Palmas' }];
      this.total *= this.items.length;
   }
}