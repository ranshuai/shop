import { Component } from '@angular/core';
import { Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StorePage } from '../pages/store/store';
import { CustomerPage } from './../pages/customer/customer';
import { CommonProvider } from './../providers/common/common';

//加载配置信息
import { AppConfig } from './AppConfig';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private appConfig:AppConfig,public app:App,public commonProvider:CommonProvider) {
        platform.ready().then(() => {
            // this.rootPage = CustomerPage;
            this.commonProvider.setRootPage('CustomerPage');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            this.app.viewDidEnter.subscribe(view => { 
                let app_n = this.app.getRootNavById('n4')
                console.log(app_n.getActiveChildNavs())
                console.log(this.app.getRootNav()._views[0].name)
            })

        });
    }
}
