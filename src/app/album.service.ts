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
    return this.angularFire.database.object('goods/' + goodId);
  }

  addGood(newGood: Good) {
    this.goods.push(newGood);
  }

}
