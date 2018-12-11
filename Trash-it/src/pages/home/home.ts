import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
 
  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter(){
    
  }

}
