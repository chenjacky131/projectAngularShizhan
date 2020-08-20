import { Component, OnInit } from '@angular/core';

interface userObj{ //  对象接口，定义一个变量为对象时，最好用接口的形式来规范变量
  name?:string,
  age:number,
  sex:string
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  /*  声明属性的几种方式：
    public  公有  默认方式  可以在这个类里面使用，也可以在外面使用
    protected 保护类型  它只有在当前类和之类里面才能访问
    private 私有属性  只能在当前类里面饭问 
  */
  public title = '我是新闻组件'// 定义数据方
  msg = '我是一条消息'  //  默认为public
  public username:string = '张三'  //  定义数据时指定类型，推荐这种方式
  public userInfo:userObj = {
    'age': 18,
    'sex': 'male'
  }
  public message:any
  public htmlC = '<h1>html标签值</h1>'
  //  定义数组
  public arr:string[] =['11','22']
  public items:Array<number> = [1,2,3]
  public obj:userObj = { 
    'name': 'tom',
    'age': 18,
    'sex': 'M'
  }
  constructor() {
    this.message = '改变属性message的值'
  }

  ngOnInit(): void {
  }

}
