import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnlaceProvider } from '../../providers/enlace/enlace';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';7

import {Pagina5Page} from '../pagina5/pagina5';


@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  ocultarSiu: boolean;
  ocultarEnlace: boolean;
  dependencia: any = {};
  facultad:any = {};

  pagina5:any = Pagina5Page;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private theInAppBrowser: InAppBrowser) {
      //console.log(navParams);
      this.dependencia = this.navParams.get('item');

}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Pagina3Page');
    if (this.dependencia.siu  == undefined){
          this.ocultarSiu = false;
          //console.log("no tiene SIU");
      }else{
          this.ocultarSiu = true;
          //console.log("boton se muestra");
      }

      if (this.dependencia.pagweb  == undefined){
            this.ocultarEnlace = false;
            //console.log("no tiene Página Web");
        }else{
            this.ocultarEnlace = true;
            //console.log("boton se muestra");
        }
  }


  openSiu(){
    //this.theInAppBrowser.create("http://guarani.med.unne.edu.ar/g3w/","_blank");
    this.theInAppBrowser.create(this.dependencia.siu,"_blank");
  }

  openLink(){
    //this.theInAppBrowser.create("https://med.unne.edu.ar/web/","_blank");
    this.theInAppBrowser.create(this.dependencia.pagweb,"_blank");
  }


}
