import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  dependencia:any = {};
  facultad:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
      //console.log(navParams);
      this.dependencia = this.navParams.get('item');

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

}
