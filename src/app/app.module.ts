import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//消费者
import { CustomerPageModule } from '../pages/customer/customer.module'
//店铺管理
import { StorePageModule } from './../pages/store/store.module';
//中转页面
import { SpringboardPageModule } from './../pages/springboard/springboard.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 组件
import { ComponentsModule } from './../components/components.module';
import { DirectivesModule } from './../directives/directives.module';


//自定义服务
import { AppConfig } from './AppConfig';
import { CommonProvider } from '../providers/common/common';



@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        DirectivesModule,
        StorePageModule,
        CustomerPageModule,
        SpringboardPageModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios',//android是'md'
            backButtonText: '',
            tabsHideOnSubPages: true//隐藏子菜单 by mwh
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AppConfig,
        CommonProvider
    ]
})
export class AppModule { }
