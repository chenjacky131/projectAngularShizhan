import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public list:any[] = []
  constructor(public route: Router) {
    for(let i = 1; i < 11; i++){
      this.list.push(i)
    }
   }

  ngOnInit(): void {
  }
  goNews(id){
    this.route.navigate(['/newsDetail', id])
  }
  goNewsQuery(){
    const navExtras: NavigationExtras = {
      queryParams: { id: 200},
      fragment: 'anchor'
    }
    this.route.navigate(['/newsDetail'], navExtras)
  }
}
