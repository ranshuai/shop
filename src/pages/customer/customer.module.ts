import { DirectivesModule } from './../../directives/directives.module';
import { ComponentsModule } from './../../components/components.module';
import { HomePage } from './home/home';
import { CategoryPage } from './category/category';
import { UserPage } from './user/user';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPage } from './customer';

@NgModule({
    declarations: [
        CustomerPage,
        HomePage,
        CategoryPage,
        UserPage

    ],
    imports: [DirectivesModule,
        ComponentsModule,
        IonicPageModule.forChild(CustomerPage),
    ],
    entryComponents: [
        HomePage,
        CategoryPage,
        UserPage
    ]
})
export class CustomerPageModule { }
