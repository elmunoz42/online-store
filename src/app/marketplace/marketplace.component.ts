import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DataServiceService } from '../data-service.service';
import { AlbumService } from '../album.service';
import { Good } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  goods: FirebaseListObservable<any[]>;


  constructor(public service: AlbumService, private router: Router) { }

  ngOnInit() {
    this.goods = this.service.getGoods();
  }

  goToDetailPage(clickedGood) {
   this.router.navigate(['goods', clickedGood.$key]);
 };

 submitForm(title: string, artist: string, description: string, url: string, quantity: any, price: any){
   var newGood: Good = new Good(title, artist, description, url, parseInt(quantity), parseFloat(price));
   this.service.addGood(newGood);
 }

}
