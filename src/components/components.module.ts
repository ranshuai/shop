import { DirectivesModule } from './../directives/directives.module';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { IonicModule } from 'ionic-angular';
import { SlidesComponent } from './slides/slides'; 
@NgModule({
	declarations: [SearchComponent,
    SlidesComponent],
    imports: [
        IonicModule,
        DirectivesModule
    ],
	exports: [SearchComponent,
    SlidesComponent]
})
export class ComponentsModule {}
