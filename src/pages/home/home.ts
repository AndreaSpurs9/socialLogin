import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import {FacebookPageModule} from "../facebook/facebook.module";
import {GooglePage} from "../google/google";
import {FacebookPage} from "../facebook/facebook";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {

  }
  facebook(){
    this.navCtrl.push(FacebookPage)
  }
  google(){
    this.navCtrl.push(GooglePage)
  }

}
