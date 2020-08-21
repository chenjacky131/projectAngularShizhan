import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keyword:string;
  public historyList:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  doSearch(){
    if(!this.historyList.includes(this.keyword)){
      this.historyList.push(this.keyword)      
    }
    this.keyword = ''
  }
  deleteHistory(index){
    this.historyList.splice(index, 1)
  }
}
