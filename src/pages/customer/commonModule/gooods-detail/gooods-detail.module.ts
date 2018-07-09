import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GooodsDetailPage } from './gooods-detail';

@NgModule({
  declarations: [
    GooodsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GooodsDetailPage),
  ],
})
export class GooodsDetailPageModule {}
