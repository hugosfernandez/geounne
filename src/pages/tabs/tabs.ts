import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AjustesPage } from '../ajustes/ajustes';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;

  constructor() {
        this.tab1 = HomePage;
        this.tab2 = AjustesPage;
  }

   ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
   }

}
