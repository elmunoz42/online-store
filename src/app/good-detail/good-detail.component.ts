import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AlbumService } from '../album.service';
import { Good } from '../app.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {
  goodId: string;
  goodToDisplay;
  saveVideo: string;
  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.goodId = urlParameters['id'];
   });

   this.goodToDisplay = this.albumService.getGoodById(this.goodId);
  }

  beginUpdatingGood(title: string, artist: string, description: string, url: string,  quantity: any){
    var goodToUpdate: Good = new Good(title, artist, description, url, parseInt(quantity));
     this.albumService.updateGood(goodToUpdate, this.goodId);
     console.log(this.goodId);
  }

}
