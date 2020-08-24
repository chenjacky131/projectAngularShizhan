import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getData(){
    console.log('来自storage的数据')
  }
  getRxjsData(){
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('我是rxjs方法的异步处理结果')
        // observer.error('失败')
      }, 3000);
    })
  }
  getRxjsDataInterval(){
    let count = 0
    return new Observable((observer) => {
      setInterval(() => {
        count++;
        observer.next(`${count}`)
        // observer.error('失败')
      }, 3000);
    })
  }
}
