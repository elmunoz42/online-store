import { Injectable } from '@angular/core';
import { Good } from './app.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class AlbumService {

  goods: FirebaseListObservable<Good[]>;

  constructor(private angularFire: AngularFire, private sanitizer: DomSanitizer) {
    this.goods = angularFire.database.list('goods');
    console.log(this.goods);
  }

  getGoods() {
    return this.goods;
  }

  getGoodById(goodId: string){
    let otherGood;
    let tempGood = this.angularFire.database.object('goods/' + goodId).subscribe(dataLastEmittedFromObserver => {
      otherGood = dataLastEmittedFromObserver;
      // let test = this.sanitizer.bypassSecurityTrustHtml(otherGood.videoUrl);
      // console.log(test);
      // otherGood.videoUrl = "<img src='" + this.sanitizer.bypassSecurityTrustHtml(otherGood.videoUrl) + "' alt='' />";
      console.log(otherGood);
    });
    return otherGood;
    // var tempVideoUrl: string = this.tempGood.videoUrl;
    // this.tempGood.videoUrl = "<img src='" + this.sanitizer.bypassSecurityTrustHtml(tempVideoUrl) + "' alt='' />";
  }

  addGood(newGood: Good) {
    this.goods.push(newGood);
  }

}
