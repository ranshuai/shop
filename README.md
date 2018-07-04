1.引入字体图标
<link href="./assets/apollo/style.css" rel="stylesheet">

2.指令
ionic g component search-component 新建组件
<search type = 1></search>
@Input() type; 接收组件在调用时传入的数据。



3.遇到的问题
 自定义的组件里面引入 ionic的组件报错
 'ion-icon' is not a known element:
    1. If 'ion-icon' is an Angular component, then verify that it is part of this module.
    2. If 'ion-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("<ion-buttons left>
    解决办法： 文档  https://www.jianshu.com/p/ac9000aa1988

        import { IonicModule } from 'ionic-angular';
        @NgModule({
            ...
            imports: [IonicModule],
            ...
        })

