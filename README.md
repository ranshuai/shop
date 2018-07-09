******

项目初始化
1.加载项目的配置信息

日志 log 


******



1.引入字体图标
<link href="./assets/apollo/style.css" rel="stylesheet">

2.组件
ionic g component search-component 新建组件
<search type = 1></search>
@Input() type; 接收组件在调用时传入的数据。

<slides></slides>



3.指令
ionic g directive imgbg
 报错 Can't bind to 'ngImgBg' since it isn't a known property of 'div'
 <div [ngImgBg] =''> </div>
在定义指令的时候不引入 @Input() ngImgBg: any; 就报错。

import { Directive,Input,ElementRef,Renderer } from '@angular/core';
ElementRef dom节点 Renderer 渲染器
@Directive({
  selector: '[ngImgBg]' // Attribute selector
})
<div ngImgBg =''> </div>



4.遇到的问题
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

<slides></slides> 鼠标触发事件之后不能自动轮播的bug
ionSlideAutoplayStop 重新调用自动轮播的方法

<ion-nav ng-reflect-root="function StoreTabsPage() {>
标签里面不显示 组件的名称 <page-tab-menu>  普通加载的方式

<ion-nav ng-reflect-root="function StoreTabsPage() {>
标签里面显示 组件的名称 <page-tab-menu>  懒加载的方式

跳转二级页面 底部tab导航没有隐藏的bug
IonicModule.forRoot(MyApp, {
            mode: 'ios',//android是'md'
            backButtonText: '',
            tabsHideOnSubPages: true//隐藏子菜单
        }),





