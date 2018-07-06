import { Component } from '@angular/core';
import { Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StorePage } from '../pages/store/store';
import { CustomerPage } from './../pages/customer/customer';

//加载配置信息
import { AppConfig } from './AppConfig';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private appConfig:AppConfig,public app:App) {
        platform.ready().then(() => {
            console.log(appConfig.init.IS_DEBUG);
            this.rootPage = CustomerPage;
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            this.app.viewDidEnter.subscribe(view => { 
                console.log(this.app.getRootNavById('n4'));
            })

        });
    }
}
