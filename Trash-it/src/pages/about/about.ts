import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

 /*  getInfo(){
    this.navCtrl.push(InfoPage);
  } */

  openInfo(){
    let infoModal = this.modalCtrl.create(InfoPage, []);
    infoModal.present();
  }


 /*  inviaMessaggio(msg: {email: string, messaggio: string}) {
    mailSender.sendTo(msg.email, msg.messaggio);
  } */

}
