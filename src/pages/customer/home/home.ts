import { SlidesComponent } from './../../../components/slides/slides';
import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild(SlidesComponent) slides: SlidesComponent;
  constructor(public navCtrl: NavController) {

  }
    
    goToDetail() {
        this.navCtrl.push('GooodsDetailPage');
    }
    ionViewDidEnter() {
        setTimeout(() => { 
            this.slides.slide.autoplayDisableOnInteraction = false;
            this.slides.autoPlay();
        }, 300)
    }
    ionViewWillLeave(){
        this.slides.stopAutoplay();
        console.log(this.navCtrl.canGoBack());
    }




}
