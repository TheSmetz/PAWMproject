import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
    
    citta:string;
    provincia:string;
   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.citta = "Camerino";
   this.provincia = "MC";

   }

   getLocation() {
    if (this.citta == "" || this.provincia == "") {
      alert ("Inserisci città");
    }else alert ("Città : "+ this.citta + "\nProvincia : "+ this.provincia);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
