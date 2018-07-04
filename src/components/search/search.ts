import { Component, Input } from '@angular/core';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * 
 * 
 * 1.首页的搜索组件
 * 2.搜索页面的组件
 */
@Component({
    selector: 'search',
    templateUrl: 'search.html'
})
export class SearchComponent {
    @Input() type;

    text: string;

    constructor() {
        console.log('Hello SearchComponent Component');
    }
    ngOnInit(): void {
        console.log(this.type);
    }

}
