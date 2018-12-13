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

getcodiceABarre(){
  return this.codiceABarre;
}

scanCodice(){
  this.options = {
    prompt: 'Scan your barcode'
  };
  this.scanner.scan(this.options).then((data) => {
    this.scannedData = data;
  }, (err) => {
    console.log('Error :', err);
  })

  //copio il codice nella variabile
  this.codiceABarre = this.scannedData.text;
}

openConferimento() {
  this.navCtrl.push(ConferimentoPage);
}

ionViewWillEnter(){
  
}

}
