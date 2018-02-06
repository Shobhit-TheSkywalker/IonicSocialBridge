import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {FacebookPage, TabsPage, WelcomePage, SpontaneousPage, ModalPage, TwitterPage} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SpontaneousMatchServiceProvider} from '../providers/providers';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
/*import {LazyLoadImagesModule} from "ngx-lazy-load-images";*/

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage,
    SpontaneousPage,
    ModalPage,
    FacebookPage,
    TwitterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WelcomePage,
    SpontaneousPage,
    ModalPage,
    FacebookPage,
    TwitterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpontaneousMatchServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
