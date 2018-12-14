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

setcodiceABarre(){
  this.codiceABarre = this.scannedData.text;
}



scanCodice(){
  this.options = {
    prompt: 'Scansiona codice a barre'
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
