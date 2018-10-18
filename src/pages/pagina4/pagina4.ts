// import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoogleMaps } from '../../providers/google-maps/google-maps';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
})
export class Pagina4Page {

  private todo : FormGroup;
  // //Accedemos a nuestra base de datos mediante la URL de tu app
  // var ref = new Firebase("https://<tuApp>.firebaseio.com/");
  // //Hacemos referencia a nuestro nodo del sensor Temp
  // var tempRef = ref.child("Administrtiva");

  dependencia: AngularFirestoreDocument<any>;

  @ViewChild('map') mapElement: ElementRef;
  latitud: number;
  longitud: number;

  constructor(  private afDB: AngularFirestore,
                public navCtrl: NavController,
                public navParams: NavParams,
                public maps: GoogleMaps,
                private formBuilder: FormBuilder) {


          this.todo = this.formBuilder.group({
              clase: ['', Validators.required],
              nombre: [''],
              direccion: [''],
              ciudad: [''],
              provincia: ['']

          });
        //this.dependencia = this.afDB.doc('/dependencias/ERAGIA');
  }

  ionViewDidLoad() {
    this.maps.init(this.mapElement.nativeElement, (latLng) => {
      console.log(latLng.lat() + ', ' + latLng.lng());
      this.latitud = latLng.lat();
      this.longitud = latLng.lng();
      // this.latitud = -27.46857161718854;
      // this.longitud = -58.83167153374745;
    }).then(() => {
    });
  }


  cargar_dependencina(clase: string, nombre:string, direccion: string, ciudad: string, provincia: string){
    this.afDB.collection(clase).add({
        nombre: nombre,
        direccion: direccion,
        ciudad: ciudad,
        provincia: provincia,
        lat: this.latitud,
        lng: this.longitud
    });
  this.todo.reset()
}

  cancelar_form(){
      this.todo.reset()
  }

    logForm(){
      console.log(this.todo.value)
    }
}
