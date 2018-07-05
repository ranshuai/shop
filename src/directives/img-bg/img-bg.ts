import { Directive, Input, ElementRef, Renderer } from '@angular/core';

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
    constructor(public el: ElementRef, public renderer: Renderer) {

    }
    ngOnInit(): void {
        this.el.nativeElement.style.height= '100%';
        this.el.nativeElement.style.backgroundPosition = "center";
        this.el.nativeElement.style.backgroundRepeat = "no-repeat";
        this.el.nativeElement.style.backgroundSize = "100% 100%";
        if (!this.ngImgBg) {
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', "url(/assets/imgs/goods_default.png)");
            return;
        }
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', "url(" + this.ngImgBg + ")");
    }
}
