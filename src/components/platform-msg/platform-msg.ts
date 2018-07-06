import { Component } from '@angular/core';

/**
 * Generated class for the PlatformMsgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'platform-msg',
  templateUrl: 'platform-msg.html'
})
export class PlatformMsgComponent {

  text: string;

  constructor() {
    console.log('Hello PlatformMsgComponent Component');
    this.text = 'Hello World';
  }

}
