import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferimentoPage } from './conferimento';

@NgModule({
  declarations: [
    ConferimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferimentoPage),
  ],
})
export class ConferimentoPageModule {}
