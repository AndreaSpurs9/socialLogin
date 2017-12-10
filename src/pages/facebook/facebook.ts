import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Facebook} from "@ionic-native/facebook";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'facebook.html',
})
export class FacebookPage {

  isLoggedIn:boolean = false;
  users: any;
  //controllo nel costruttore se gia loggato
  constructor(private fb: Facebook, private  navCtrl: NavController) {
    fb.getLoginStatus().then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
      .catch(err => console.log(err));
  }
  //login facebook
  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(err => console.log('Error logging into Facebook', err));
  }
  //logout facebook
  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(err => console.log('Error logout from Facebook', err));
  }
  //dati utente
  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

}

