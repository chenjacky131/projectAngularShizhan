import { Component, OnInit } from '@angular/core';
//  引入服务
import { StorageService } from '../../services/storage.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keyword:string;
  public historyList:any[] = [];
  constructor(public storage:StorageService) {
  }

  ngOnInit(): void {
    this.historyList = this.storage.get('searchList') ? this.storage.get('searchList') : []
  }
  inputSearch(e){
    if(e.keyCode === 13){
      this.doSearch()
    }
  }
  doSearch(){
    if(!this.historyList.includes(this.keyword)){
      this.historyList.push(this.keyword)
      this.storage.set('searchList', this.historyList)  
    }
    this.keyword = ''
  }
  deleteHistory(index){
    this.historyList.splice(index, 1)
    this.storage.set('searchList', this.historyList)
  }
}
