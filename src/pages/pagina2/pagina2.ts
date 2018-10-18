import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Pagina3Page} from '../pagina3/pagina3';

import{ AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import{ Observable } from 'rxjs/Observable';

import firebase from 'firebase';

// import { AngularFireDatabase } from  'angularfire2/database';



interface dependencia{ nombre: string;
                    	 direccion: string;
                    	 lat: number;
                    	 lng: number}
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})

export class Pagina2Page {
  //dependenciaList es la lista que estamos sacando de firebase
  public dependenciaList:Array<any>;
  public loadedDependenciaList:Array<any>;
//Es para crear una referencia de la base para que podamos extraer los datos de Firebase
  public dependenciaRef:any;

  clase:string = "";
  nclase:string  = "";

  pagina3:any = Pagina3Page;

  dependenciaCollection: AngularFirestoreCollection <dependencia>;
  dependencia: Observable <dependencia[]>;



  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                private afDB: AngularFirestore
                // public fireDatabase: AngularFireDatabase
              ) {


                  this.clase = this.navParams.get('clase');
                  this.nclase = this.navParams.get('nclase');


                  this.dependenciaRef = firebase.database().ref('Dependencias')
                                                            .orderByChild('estado')
                                                            .equalTo(1);

                  this.dependenciaRef.on('value', dependenciaList => {
                     let dependencias1 = [];
                     dependenciaList.forEach( item => {
                       dependencias1.push(item.val());
                       return false;
                    });

                     this.dependenciaList = dependencias1;
                     this.loadedDependenciaList = dependencias1;
                   });
                }

                    // CODIGO EJEMPLO FRANCO
                    // this.usuariosRef  = firebase.database().ref('Usuarios')
                    //                                 .orderByChild('estado')
                    //                                 .equalTo(1);//Referencia a los productos de estado 1
                    //
                    //     this.usuariosRef.on('value', usuariosList => {
                    //     let usuarios = [];
                    //     usuariosList.forEach( usuario => {
                    //     usuarios.push(usuario.val());
                    //     return false;
                    //     });
                    //
                    //     this.usuariosList = usuarios;
                    //     this.loadedUsuariosList = usuarios;
                    //
                    //     });
                    //       //-------------------------------------------------------
                    //     }




  ionViewDidLoad() {
    this.dependenciaCollection = this.afDB.collection(`${this.clase}`);
    this.dependencia = this.dependenciaCollection.valueChanges();
    //console.log('ionViewDidLoad Pagina2Page');
  }



  initializeItems2(): void {
    this.dependenciaList = this.loadedDependenciaList;
    console.log(this.dependenciaList);
  }

// CODIGO EJEMPLO FRANCO
//   initializeItems2(): void {
//   this.usuariosList = this.loadedUsuariosList;
//   console.log(this.usuariosList);
// }


  getItems2(searchbar) {
  // Reset items back to all of the items
  this.initializeItems2();
  //console.log(this.dependenciaList);
  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;

  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }
  this.dependenciaList = this.dependenciaList.filter((v) => {
    if(v.nombre && q) {
      if (v.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
  console.log(q, this.dependenciaList.length);

}

}

// CODIGO EJEMPLO FRANCO
// getItems2(searchbar) {
//   // resetea la barra con todos los items
//   this.initializeItems2();
//   // establece barra de busquedar al valor de q
//   var q = searchbar.srcElement.value;
//   // if the value is an empty string don't filter the items
//   if (!q) {
//     return;
//   }
//   this.usuariosList = this.usuariosList.filter((v) => {
//     if(v.apellido && q ) {
//       if ((v.apellido.toLowerCase().indexOf(q.toLowerCase()) > -1)) {
//         return true;
//       }
//       return false;
//     }
//   });
//   console.log(q, this.usuariosList.length);
//
// }
