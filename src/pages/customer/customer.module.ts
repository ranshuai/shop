import { DirectivesModule } from './../../directives/directives.module';
import { ComponentsModule } from './../../components/components.module';
import { HomePage } from './home/home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPage } from './customer';

@NgModule({
    declarations: [
        CustomerPage,
        HomePage
    ],
    imports: [DirectivesModule,
        ComponentsModule,
        IonicPageModule.forChild(CustomerPage),
    ],
    entryComponents: [
        HomePage
    ]
})
export class CustomerPageModule { }
