import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo03';
  public tit = 'app 里的tit';
  public flag:boolean = true;
  changeTit(){
    this.tit = '值改变了'
    console.log('tit changed')
  }
  hideLifetime(){
    this.flag = !this.flag;
  }
}
