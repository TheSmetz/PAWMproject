//APP.MODULES.TS FILE PRICIPALE IN CUI DEVE ESSERE DICHIARATO TUTTO

//default
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms'; //ngModel etc

//pages import {nome scelto} from 'path nel progetto'
import { HomePage } from '../pages/home/home';
import { ConferimentoPage } from '../pages/conferimento/conferimento';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { InfoPage } from '../pages/info/info';
import { ProductsPage } from '../pages/products/products';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// no perchè è richiamato in home import { ConferimentoPage } from '../pages/conferimento/conferimento';

//provider
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    InfoPage,
    HomePage,
    ConferimentoPage,
    SettingsPage,
    ProductsPage,
    TabsPage,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    InfoPage,
    HomePage,
    ConferimentoPage,
    SettingsPage,
    ProductsPage,
    TabsPage,
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
