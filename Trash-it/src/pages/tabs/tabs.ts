import { Component } from '@angular/core';

//pages
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';
//import { ConferimentoPage } from '../conferimento/conferimento';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //impostazione dei tabs
  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = AboutPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
