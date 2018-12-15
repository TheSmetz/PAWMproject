import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  getInfo(){
    this.navCtrl.push(InfoPage);
  }

 /*  inviaMessaggio(msg: {email: string, messaggio: string}) {
    mailSender.sendTo(msg.email, msg.messaggio);
  } */

}
