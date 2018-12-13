//APP.MODULES.TS FILE PRICIPALE IN CUI DEVE ESSERE DICHIARATO TUTTO

//default
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages import {nome scelto} from 'path nel progetto'
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoPage } from '../pages/info/info';
import { ConferimentoPage } from '../pages/conferimento/conferimento';

//provider
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TabsPage,
    InfoPage,
    ConferimentoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TabsPage,
    InfoPage,
    ConferimentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
