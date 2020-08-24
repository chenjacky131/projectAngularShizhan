import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { filter,map,throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public storage:StorageService) { }

  ngOnInit(): void {
    this.storage.getData()
    // const stream = this.storage.getRxjsData()
    // const d = stream.subscribe((data) => {
    //   alert(data)
    // })
    // setTimeout(() => {
    //   d.unsubscribe()
    // }, 1000);
    const intervalStream:any = this.storage.getRxjsDataInterval()
    // intervalStream.pipe(
    //   filter((val:any) => {
    //     return val % 2 === 0
    //   })
    // ).subscribe((data) => {
    //   console.log(data)
    // })
    intervalStream.pipe(
      map((val:any) => {
        return val * val
      })
    ).subscribe((data) => {
      console.log(data)
    })
  }
  ngAfterViewInit(){
    const button:any = document.querySelector('button')
    fromEvent(button, 'click').pipe(
      throttleTime(1000)
    )
    .subscribe(()=> {
      console.log('Clicked')
    })
  }

}
