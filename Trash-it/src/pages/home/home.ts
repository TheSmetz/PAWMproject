import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pagine utilizzate
import { ConferimentoPage } from '../conferimento/conferimento';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  codiceABarre:string;

  options: BarcodeScannerOptions;
  scannedData:any={};
 
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner) {
    this.codiceABarre = "";
  }

  scan(){
    this.options = {
      prompt: 'Scan your barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
    //this.scanner.scan().then(() => {}, (err) => {})
  }

  getBarcode(){
   /*  if(this.codiceABarre == ""){
      alert("Inserire codice a barre valido");
    } else {
      alert("Codice inserito " + this.codiceABarre);
    } */

    this.navCtrl.push(ConferimentoPage);

  }

  ionViewWillEnter(){
    
  }

}
