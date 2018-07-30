
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class UbicacionProvider {

  user: AngularFirestoreDocument<any>;
  private watch: Subscription;


  constructor(private geolocation: Geolocation,
              private afDB: AngularFirestore) {}

  inicializaUser(){
    this.user = this.afDB.doc('/usuarios/hfer');
  }


  iniciarGeoLocalizacion(){
    this.afDB.doc('/dependencias/FM').valueChanges().subscribe( documento => {
        console.log( documento ) ;
       });

    this.geolocation.getCurrentPosition().then((resp) => {
      //resp.coords.latitude
      //resp.coords.longitude

     console.log(resp.coords);
      this.user.update({
             lat: resp.coords.latitude,
             lng: resp.coords.longitude
          });

            this.watch = this.geolocation.watchPosition()
                    .subscribe((data) => {
                            // data can be a set of coordinates, or an error (if an error occurred).
                            // data.coords.latitude
                            // data.coords.longitude
                                console.log(data.coords);
                                 this.user.update({
                                        lat: data.coords.latitude,
                                        lng: data.coords.longitude
                                      });
            });

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  deterUbicacion(){
      try{
        this.watch.unsubscribe();
      }catch(e){
        console.log(JSON.stringify(e));
      }
  }


}
