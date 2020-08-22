import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  public showSide:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  toggleSide(){
    const aside:any = document.querySelector('#aside')
    if(this.showSide){
      aside.style.transform = 'translate(100%,0)'
      this.showSide = false
    }else{
      aside.style.transform = 'translate(0,0)'
      this.showSide = true
    }
  }
}
