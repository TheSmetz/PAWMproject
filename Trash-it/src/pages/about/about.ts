import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewInfoPage } from '../view-info/view-info';
import { OverlayComponent } from '../../components/overlay/overlay';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  getOverlay(){
    this.navCtrl.push(OverlayComponent);
  }

  getInfo(){
    this.navCtrl.setRoot(ViewInfoPage);
  }

}
