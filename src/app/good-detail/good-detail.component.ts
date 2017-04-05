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
   var tempVideoUrl: string = this.goodToDisplay.videoUrl;
   this.goodToDisplay.videoUrl = "<img src='" + this.sanitizer.bypassSecurityTrustHtml(tempVideoUrl) + "' alt='' />";

  }

}
