"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LifetimeComponent = void 0;
var core_1 = require("@angular/core");
var LifetimeComponent = /** @class */ (function () {
    function LifetimeComponent() {
        this.msg = '我是一个生命周期演示';
        console.log('00构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做');
    }
    LifetimeComponent.prototype.ngOnChanges = function () {
        console.log('01ngOnChanges执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)');
    };
    LifetimeComponent.prototype.ngOnInit = function () {
        console.log('02ngOnInit执行了---请求数组一般放在这里');
    };
    LifetimeComponent.prototype.ngDoCheck = function () {
        // 写一些自定义的操作
        console.log('03ngDoCheck执行了---检测，并在发生了angular无法或者不愿意自己检测的时候做出反应');
    };
    LifetimeComponent.prototype.ngAfterContentInit = function () {
        console.log('04ngAfterContentInit执行了---当把内容投影进组件之后调用');
    };
    LifetimeComponent.prototype.ngAfterContentChecked = function () {
        console.log('05ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用');
    };
    LifetimeComponent.prototype.ngAfterViewInit = function () {
        console.log('06ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用(dom操作放在这里)');
    };
    LifetimeComponent.prototype.ngAfterViewChecked = function () {
        console.log('07ngAfterViewChecked执行了----每次做完组件视图及其子视图的变更检测之后调用');
    };
    LifetimeComponent.prototype.ngOnDestroy = function () {
        console.log('08ngOndestroy执行了---组件销毁的时候执行');
    };
    LifetimeComponent.prototype.changeMsg = function () {
        this.msg = '值改变了';
    };
    __decorate([
        core_1.Input('tit')
    ], LifetimeComponent.prototype, "tit");
    LifetimeComponent = __decorate([
        core_1.Component({
            selector: 'app-lifetime',
            templateUrl: './lifetime.component.html',
            styleUrls: ['./lifetime.component.scss']
        })
    ], LifetimeComponent);
    return LifetimeComponent;
}());
exports.LifetimeComponent = LifetimeComponent;
