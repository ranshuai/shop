import { Component } from '@angular/core';

/**
 * Generated class for the TwoLevelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'two-level',
  templateUrl: 'two-level.html'
})
export class TwoLevelComponent {

  text: string;

  constructor() {
    console.log('Hello TwoLevelComponent Component');
    this.text = 'Hello World';
  }

}
