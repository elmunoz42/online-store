import { Injectable } from '@angular/core';
import { Good } from './app.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class AlbumService {

  goods: FirebaseListObservable<Good[]>;

  constructor(private angularFire: AngularFire) {
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

  updateGood(localUpdatedGood: Good, id: any){
    var goodEntryInFirebase = this.getGoodById(id);
    goodEntryInFirebase.update({title: localUpdatedGood.title,
                                artist: localUpdatedGood.artist,
                                description: localUpdatedGood.description,
                                videoUrl: localUpdatedGood.videoUrl,
                                quantity: localUpdatedGood.quantity
                              });
  }

  deleteGood(id: any){
    var goodEntryInFirebase = this.getGoodById(id);
    goodEntryInFirebase.remove();
  }

}
