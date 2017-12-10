import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GooglePlus} from "@ionic-native/google-plus";

/**
 * Generated class for the GooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
})
export class GooglePage {
  displayName: any;//nome e cognome
  email: any;
  familyName: any;//cognome
  givenName: any;//nome
  userId: any;
  imageUrl: any;

  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {

  }

  login() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.displayName = res.displayName;
        this.email = res.email;
        this.familyName = res.familyName;
        this.givenName = res.givenName;
        this.userId = res.userId;
        this.imageUrl = res.imageUrl;

        this.isLoggedIn = true;
      })
      .catch(err => console.error(err));
  }

  logout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.displayName = "";
        this.email = "";
        this.familyName = "";
        this.givenName = "";
        this.userId = "";
        this.imageUrl = "";

        this.isLoggedIn = false;
      })
      .catch(err => console.error(err));
  }
}
