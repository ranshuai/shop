import { Component, ViewChild,Input } from '@angular/core';
import { Slides } from 'ionic-angular'
/**
 * Generated class for the SlidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'slides',
    templateUrl: 'slides.html'
})
export class SlidesComponent {
    @ViewChild('ionSlides') slide: Slides;
    @Input() type: string;
    text: string;
    

    constructor() {
        console.log('Hello SlidesComponent Component');
        this.text = 'Hello World';
    }


    autoPlay() {
        if (this.slide)
            this.slide.startAutoplay();
    }
    
    stopAutoplay() { 
        if (this.slide)
            this.slide.startAutoplay();
    }
}
