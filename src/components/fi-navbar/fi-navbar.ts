import { Component } from '@angular/core';

/**
 * Generated class for the FiNavbar component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'fi-navbar',
  templateUrl: 'fi-navbar.html'
})
export class FiNavbar {

  text: string;

  constructor() {
    console.log('Hello FiNavbar Component');
    this.text = 'Hello World';
  }

}
