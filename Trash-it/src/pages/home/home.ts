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

  //opzioni relative alla schermata di scansione
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
    prompt: 'Scansiona codice a barre',
    showFlipCameraButton: false,
    showTorchButton: true,
    resultDisplayDuration: 0, //tempo discansione
    formats: 'EAN_13' //limito al classico codice a 13 cifre
  };
  this.scanner.scan(this.options).then((data) => {
    //codice catturato
    this.scannedData = data;
    
  }, (err) => {
    //se c'è un errore
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
