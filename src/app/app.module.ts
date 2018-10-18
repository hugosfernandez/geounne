import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { Pagina3Page } from '../pages/pagina3/pagina3';
import { Pagina4Page } from '../pages/pagina4/pagina4';
import { TabsPage } from '../pages/tabs/tabs';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { LoginPage } from '../pages/login/login';
import { Pagina5Page } from '../pages/pagina5/pagina5';


//SERVICIOS
import { UsuarioProvider } from '../providers/usuario/usuario';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';
import { EnlaceProvider } from '../providers/enlace/enlace';
import { AgmCoreModule } from '@agm/core';

//PLUGINS
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../config/firebase.config';

// import { GoogleMapsProvider } from '../providers/google-maps/google-maps';

import { GoogleMaps } from '../providers/google-maps/google-maps';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page,
    Pagina5Page,
    TabsPage,
    AjustesPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
   })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page,
    Pagina5Page,
    TabsPage,
    AjustesPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    Facebook,
    UbicacionProvider,
    Geolocation,
    GooglePlus,
    EnlaceProvider,
    InAppBrowser,
    GoogleMaps

  ]
})
export class AppModule {}
