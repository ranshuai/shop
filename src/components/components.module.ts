import { DirectivesModule } from './../directives/directives.module';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { IonicModule } from 'ionic-angular';
import { SlidesComponent } from './slides/slides';
import { TwoLevelComponent } from './two-level/two-level';
import { PlatformMsgComponent } from './platform-msg/platform-msg'; 
@NgModule({
	declarations: [SearchComponent,
    SlidesComponent,
    TwoLevelComponent,
    PlatformMsgComponent],
    imports: [
        IonicModule,
        DirectivesModule
    ],
	exports: [SearchComponent,
    SlidesComponent,
    TwoLevelComponent,
    PlatformMsgComponent]
})
export class ComponentsModule {}
