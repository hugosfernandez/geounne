import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AjustesPage } from '../ajustes/ajustes';
import { Pagina5Page } from '../pagina5/pagina5';
import { Pagina4Page } from '../pagina4/pagina4';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor() {
        this.tab1 = HomePage;
        //this.tab2 = AjustesPage;
        this.tab2 = Pagina5Page;
        this.tab3 = Pagina4Page;
  }

   ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
   }

}
