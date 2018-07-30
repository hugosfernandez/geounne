import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Pagina3Page} from '../pagina3/pagina3';

import{ AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import{ Observable } from 'rxjs/Observable';

import firebase from 'firebase';



interface dependencia{ nombre: string;
                    	 direccion: string;
                    	 lat: number;
                    	 lng: number}
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})

export class Pagina2Page {
  public dependenciaList:Array<any>;
  public loadedDependenciaList:Array<any>;
  public dependenciaRef:firebase.database.Reference;

  clase:string = "";
  nclase:string  = "";

  pagina3:any = Pagina3Page;

  dependenciaCollection: AngularFirestoreCollection <dependencia>;
  dependencia: Observable <dependencia[]>;



  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                private afDB: AngularFirestore) {


                  this.clase = this.navParams.get('clase');
                  this.nclase = this.navParams.get('nclase');


                  // this.dependenciaRef = firebase.database().ref('academica');
                  //
                  // this.dependenciaRef.on('value', dependenciaList => {
                  //   let dependencias1 = [];
                  //   dependenciaList.forEach( nombre => {
                  //     dependencias1.push(nombre.val());
                  //     return false;
                  //   });
                  //
                  //   this.dependenciaList = dependencias1;
                  //   this.loadedDependenciaList = dependencias1;
                  // });
                }


  ionViewDidLoad() {
    this.dependenciaCollection = this.afDB.collection(`${this.clase}`);
    this.dependencia = this.dependenciaCollection.valueChanges();
    //console.log('ionViewDidLoad Pagina2Page');
  }



  initializeItems(): void {
    this.dependenciaList = this.loadedDependenciaList;
    //console.log();
  }



  getItems(searchbar) {
  // // Reset items back to all of the items
  // this.initializeItems();
  // // set q to the value of the searchbar
  // var q = searchbar.srcElement.value;
  //
  // // if the value is an empty string don't filter the items
  // if (!q) {
  //   return;
  // }
  // this.dependenciaList = this.dependenciaList.filter((v) => {
  //   if(v.nombre && q) {
  //     if (v.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1) {
  //       return true;
  //     }
  //     return false;
  //   }
  // });
  // console.log(q, this.dependenciaList.length);

}


}
