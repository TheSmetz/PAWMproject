import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConferimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conferimento',
  templateUrl: 'conferimento.html',
})
export class ConferimentoPage {

  codiceABarre:string;
  nome:string;
  descrizione:string;
  plastica:boolean;
  carta:boolean;
  vetro:boolean;
  indifferenziato:boolean;
  immagine:string;
  punti:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.codiceABarre = navParams.get('codiceABarreP');
    /* this.nome = navParams.get('param1');
    this.descrizione = navParams.get('param1');
    this.plastica = navParams.get('param1');
    this.carta = navParams.get('param1');
    this.vetro = navParams.get('param1');
    this.indifferenziato = navParams.get('param1');
    this.immagine = navParams.get('param1');
    this.punti = navParams.get('param1'); */

  }

  getCodice() {
    return this.codiceABarre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConferimentoPage');
  }

}
