import { Component } from '@angular/core';

//pages
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //impostazione dei tabs
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
