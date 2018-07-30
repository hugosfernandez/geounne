import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pagina2Page } from '../pagina2/pagina2';
import { Pagina3Page } from '../pagina3/pagina3';
import { LoginPage } from '../login/login';


import { UsuarioProvider } from '../../providers/usuario/usuario';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';

import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clase:string  = "";
  nclase:string  = "";
  //selectedLeave : string = '';

  pagina2:any = Pagina2Page;
  //pagina3:any = Pagina3Page;


    constructor(public navCtrl: NavController,
                public usuarioProv: UsuarioProvider,
                public _ubicacionProvider: UbicacionProvider,
                public app: App) {

        this._ubicacionProvider.inicializaUser();
        //this._ubicacionProvider.iniciarGeoLocalizacion();
        //console.log (this.usuarioProv.usuario);

    }

    salir(){
      this.app.getRootNav().setRoot( LoginPage );
      this._ubicacionProvider.deterUbicacion();
      this.usuarioProv.borrarUsuario();
      this.navCtrl.setRoot( LoginPage );
    }

    irPagina2(clase:string, nclase:string){
      //console.log(clase);
      this.navCtrl.push(Pagina2Page, { clase, nclase } );
    }


  // constructor(public navCtrl: NavController, public usuarioProv: UsuarioProvider, afDB: AngularFireDatabase) {
  //     this.items = afDB.list('Dependencias').valueChanges();
  // }

}
