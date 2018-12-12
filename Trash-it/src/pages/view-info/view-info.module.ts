import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewInfoPage } from './view-info';

@NgModule({
  declarations: [
    ViewInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewInfoPage),
  ],
})
export class ViewInfoPageModule {}
