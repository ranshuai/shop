import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the SpringboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-springboard',
  templateUrl: 'springboard.html',
})
export class SpringboardPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
        switch (this.navParams.get('type')) {
            case 'root':
            this.app.getRootNav().setRoot(this.navParams.get('page'), {}, 
              {animate: true}
            ) .then(() =>{
              this.app.getRootNav().popToRoot();
          }) 
            break;
            default:
          }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpringboardPage');
  }

}
