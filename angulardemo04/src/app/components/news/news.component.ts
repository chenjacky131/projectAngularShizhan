import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public list:any[] = [];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  getData(){
    const api = 'http://127.0.0.1:9090/api/getData'
    this.http.get(api).subscribe((data:any) => {
      console.dir(data)
    })
  }
  getDataPost(){
    const api = 'http://127.0.0.1:9090/api/getDataPost'
    //  需要手动设置请求头
    const httpHead = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    this.http.post(api,{'name':'google', 'url': 'www.google.com'}, httpHead).subscribe(data => {
      console.dir(data)
    })
  }
  getDataJsonP(){
    const api = 'http://127.0.0.1:9090/api/getDataJsonp'
    this.http.jsonp(api, 'callback').subscribe((res:any) => {
      console.dir(res)
    })
  }
}
