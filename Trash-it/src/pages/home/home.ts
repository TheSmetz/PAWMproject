import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   //città (da prendere in input successivamente)
   location:{
    citta:string,
    provincia:string
   }
 
  constructor(public navCtrl: NavController, private storage:Storage) {
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if (val != null){
        this.location.citta = 'Ciao';
      } else {
        this.location = {
          citta: 'Camerino',
          provincia: 'MC'
        }
      }
    })
  }

}
