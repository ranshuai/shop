import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

    constructor( private app:App) {
        console.log('Hello CommonProvider Provider');
    }

    setRootPage(page) {
        this.app.getRootNav().setRoot('SpringboardPage', {
            type: 'root',
            page: page
          },
            { animate: false }
          ) .then(() => {
            this.app.getRootNav().popToRoot();
          })
    }

}
