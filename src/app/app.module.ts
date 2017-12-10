import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GooglePlus} from "@ionic-native/google-plus";
import { Facebook } from '@ionic-native/facebook';
import {GooglePage} from "../pages/google/google";
import {FacebookPage} from "../pages/facebook/facebook";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GooglePage,
    FacebookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GooglePage,
    FacebookPage
  ],
  providers: [
    StatusBar,
    Facebook,
    GooglePlus,

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
