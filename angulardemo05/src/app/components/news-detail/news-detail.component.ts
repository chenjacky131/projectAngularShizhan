import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  public newsId:string;
  public newsId2: string;
  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((val:any) => {
      this.newsId = val.id
    })
    this.route.params.subscribe((val:any) => {
      this.newsId2 = val.id
    })
  }

}
