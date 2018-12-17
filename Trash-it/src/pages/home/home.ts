import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

//providers

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
 
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner, public modalCtrl : ModalController) {
    
    this.codiceABarre = "";
  }

getcodiceABarre(){
  return this.codiceABarre;
}

setcodiceABarre(codice:string){
  this.codiceABarre = codice;
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
    this.codiceABarre = this.scannedData.text;
    
  }, (err) => {
    //se c'è un errore
    console.log('Error :', err);
  })

  //copio il codice nella variabile
  this.codiceABarre = this.scannedData.text;
}

//conferisco prodotto passango il codice a barre
openConferimento() {
  this.navCtrl.push(ConferimentoPage, {
    codiceABarreP: this.codiceABarre
    //, param2..
  });
}

/* openModal(){
  var modalPage = this.modalCtrl.create('ProductsPage');
  modalPage.present();
} */

ionViewWillEnter(){
  
}

}
