import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UsuarioProvider } from '../../providers/usuario/usuario';

import { TabsPage } from '../tabs/tabs';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public usuarioProv: UsuarioProvider,
              private fb: Facebook,
              private platform: Platform) {
  }

  signInWithFacebook() {

      if (this.platform.is('cordova')) {
          //Celular
        this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
        .then( user => {
                        console.log(user);

                        this.usuarioProv.cargarUsuario(
                                                        user.displayName,
                                                        user.email,
                                                        user.photoURL,
                                                        user.uid,
                                                        'facebook');
                        this.navCtrl.setRoot(TabsPage);
                      }).catch(e => console.log('Error con el login' + JSON.stringify(e)));
        })
      }else{
        //Escritorio
        this.afAuth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(res => {
                        console.log(res);
                        let user= res.user;

        this.usuarioProv.cargarUsuario(
                                        user.displayName,
                                        user.email,
                                        user.photoURL,
                                        user.uid,
                                        'facebook');

       this.navCtrl.setRoot(TabsPage);

                        });
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
