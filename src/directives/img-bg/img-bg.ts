import { Directive,Input } from '@angular/core';

/**
 * Generated class for the ImgBgDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[ngImgBg]' // Attribute selector
})
export class ImgBgDirective {
    @Input() ngImgBg: any;
  constructor() {
    console.log('Hello ImgBgDirective Directive');
  }

}
