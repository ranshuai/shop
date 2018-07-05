import { DirectivesModule } from './../../directives/directives.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorePage } from './store';
import { HomePage } from './home/home';


@NgModule({
    declarations: [
        StorePage,
        HomePage
    ],
    imports: [
        ComponentsModule,
        DirectivesModule,
        IonicPageModule.forChild(StorePage),
    ],
    entryComponents: [
        HomePage
    ]
})
export class StorePageModule { }
