// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// angular核心模块
import { NgModule } from '@angular/core';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
//  NgModule装饰器，接受一个元数据对象，告诉angular如何编译启动
@NgModule({
  declarations: [ // 配置项目运行的组件
    AppComponent, NewsComponent, HeaderComponent
  ],
  imports: [  //  配置项目运行依赖的模块
    BrowserModule
  ],
  providers: [],  //   项目所需的服务
  bootstrap: [AppComponent] //  指定应用的主视图(称为根组件)
})
export class AppModule { }
