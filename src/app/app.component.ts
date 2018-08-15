import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StorePage } from '../pages/store/store';
import { CustomerPage } from './../pages/customer/customer';
import { CommonProvider } from './../providers/common/common';
import { CommonModelProvider } from './../providers/common-model/common-model';




//加载配置信息
import { AppConfig } from './AppConfig';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private appConfig: AppConfig, public app: App, public commonProvider: CommonProvider, public commonModelProvider: CommonModelProvider) {
        platform.ready().then(() => {
            var __this = this;
            window.onpopstate = function (e) {
                // console.log(_this.app.getActiveNavs()[0]._views[_this.app.getActiveNavs()[0]._views.length-1].name)
                setTimeout(() => {
                    if (!__this.app.getActiveNavs()[0].canGoBack()) {
                        window.history.pushState(null, null, "#/");
                        if (window.location.hash == '#/' && !__this.commonModelProvider.getCanBackStatus()) { 
                            alert('fanhui');
                        }
                        __this.commonModelProvider.setCanBackStatus(__this.app.getActiveNavs()[0].canGoBack());
                    } 
                }, 300);

            };
            // this.rootPage = CustomerPage;
            this.commonProvider.setRootPage('CustomerPage');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            this.app.viewWillLeave.subscribe(view => { 
                __this.commonModelProvider.setCanBackStatus(true);
            })

            this.app.viewDidEnter.subscribe(view => {
                setTimeout(() => {
                    // console.log(this.app.getActiveNavs()[0]);
                    // console.log(window.history);
                }, 30)
            })
        });
    }
}
