import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public peopleInfo:any = {
    username: 'tony',
    sex: '1',
    citys: ['北京','上海','深圳','广州'],
    city:'广州',
    hobbies:[
      {title:'游泳',checked:true},
      {title:'打篮球',checked:false},
      {title:'踢足球',checked:false},
    ],
    mark: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  doSubmit(){
    console.log(this.peopleInfo)
  }
}
