import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public keyword:string = ''
  public todolist:any[] =[]
  constructor(public storage:StorageService) { }

  ngOnInit(): void {
    this.todolist = this.storage.get('todolist')?this.storage.get('todolist'):[]
  }
  doAdd(e){
    if(e.keyCode === 13){
      if(!this.keyword){
        return false
      }
      if(!this.todolistHasKeyword(this.keyword)){
        this.todolist.push({
          title: this.keyword,
          status: false
        })
        this.storage.set('todolist', this.todolist)
      }
      this.keyword = ''
    }
  }
  todolistHasKeyword(keyword){
    for(let i =0; i < this.todolist.length; i++){
      if(this.todolist[i]['title'] === keyword){
        return true
      }
    }
    return false
  }
  deleteItem(index){
    this.todolist.splice(index,1)
    this.storage.set('todolist', this.todolist)
  }
  handleChange(index){
    this.storage.set('todolist', this.todolist)
  }
}
