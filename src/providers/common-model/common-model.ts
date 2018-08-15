
/*
  Generated class for the CommonModelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class CommonModelProvider {

    //点击返回是否显示弹窗
    canBack: boolean = true;

    constructor() {
        console.log('Hello CommonModelProvider Provider');
    }

    setCanBackStatus(b) {
        this.canBack = b;
    }
    getCanBackStatus() {
        return this.canBack;
    }


}
