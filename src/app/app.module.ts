import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//消费者
import { CustomerPageModule } from '../pages/customer/customer.module'
//店铺管理
import { StorePageModule } from './../pages/store/store.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 组件
import { ComponentsModule } from './../components/components.module';
import { DirectivesModule } from './../directives/directives.module';


//自定义服务
import { AppConfig } from './AppConfig';



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
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AppConfig
    ]
})
export class AppModule { }
