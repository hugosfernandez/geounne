import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { UsuarioProvider } from '../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;
  //rootPage:any = TabsPage;

  constructor(  platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                public _usuarioProvider: UsuarioProvider
              ) {
    platform.ready().then(() => {
      _usuarioProvider.cargarStorage().then( existe => {
          statusBar.styleDefault();
          splashScreen.hide();

          if ( existe ) {
              this.rootPage = TabsPage;
          }else{
              this.rootPage = LoginPage;
          }
      });
    });
  }
}
