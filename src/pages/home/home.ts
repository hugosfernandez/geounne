import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pagina2Page } from '../pagina2/pagina2';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';

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

  pagina2:any = Pagina2Page;

    constructor(public navCtrl: NavController,
                public _usuarioProv: UsuarioProvider,
                public _ubicacionProvider: UbicacionProvider,
                private afAuth: AngularFireAuth,
                public app: App) {

        this._ubicacionProvider.inicializaUser();

        //this._ubicacionProvider.iniciarGeoLocalizacion();
        //console.log (this.usuarioProv.usuario);

    }

    salir(){
            this.afAuth.auth.signOut().then( res => {
	          //this._usuarioProv.usuario = {}
            this._usuarioProv.borrarUsuario();
	          this.navCtrl.setRoot (LoginPage);
            this.app.getRootNav().setRoot( LoginPage );
            this._ubicacionProvider.deterUbicacion();
            this._usuarioProv.eliminarStorage();
      })
      //this.app.getRootNav().setRoot( LoginPage );
      //this._ubicacionProvider.deterUbicacion();
      //this._usuarioProv.borrarUsuario();
      //this.navCtrl.setRoot( LoginPage );
    }

    irPagina2(clase:string, nclase:string){
      //console.log(clase);
      this.navCtrl.push(Pagina2Page, { clase, nclase } );
    }


}
