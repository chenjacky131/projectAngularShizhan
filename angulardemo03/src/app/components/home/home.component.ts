/*
ViewChild获取DOM节点
  1.模板中给个标识
    <div #mybox></div>
  2.在业务逻辑里面引入ViewChild
  3.获取DOM节点,写在类里面
    @ViewChlid('mybox') myBox:any
  4.在viewAfterViewInit生命周期里面获取DOM
    this.myBox.nativeElement

  ViewChild获取子组件
    1.引入子组件时给个标识
    <app-header #header></app-header>
    2.获取子组件,写在类里面
      @ViewChlid('header') header:any
    3.在viewAfterViewInit生命周期里面调用子组件的方法
      this.header.run()

*/
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //  获取DOM节点
  @ViewChild('mybox') myBox:any;
  //  获取一个组件
  @ViewChild('header') header:any;
  constructor() { }

  ngOnInit(): void {
    //  组件和初始化指令完成，并不是dom加载完成
  }
  ngAfterViewInit(): void {
    //  DOM加载完成
    console.log(this.myBox.nativeElement)
    //  调用子组件里面的方法
    this.header.run()
  }
}
