
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
  public msg:string = '我来自home组件'
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
  run(e){
    console.log('我是home组件的run方法',e)
  }
}
