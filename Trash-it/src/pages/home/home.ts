import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  codiceABarre:string;
 
  constructor(public navCtrl: NavController) {
    this.codiceABarre = "";
  }

  getBarcode(){
    if(this.codiceABarre == ""){
      alert("Inserire codice a barre valido");
    } else {
      alert("Codice inserito " + this.codiceABarre);
    }
  }

  ionViewWillEnter(){
    
  }

}
