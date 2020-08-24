import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() msg:string
  @Input() fun:any
  @Input() home:any
  @Output() private outer = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.home)
  }
  doFun(){
    this.fun()
  }
  sendParent(){
    alert('我是footer组件的方法')
    this.outer.emit('我是来自footer的参数')
  }
}
