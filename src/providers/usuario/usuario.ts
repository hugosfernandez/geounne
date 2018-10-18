import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export interface Credenciales{  nombre?: string;
                                imagen?: string;
                                email?: string;
                                uid?: string;
                                provider?: string}


@Injectable()
export class UsuarioProvider {


  usuario: Credenciales = {};

  constructor(
              private platform: Platform,
              private storage: Storage
    //private afDB: AngularFirestore
  ) {}

  cargarUsuario(nombre: string,
                imagen: string,
                email: string,
                uid: string,
                provider: string){

                this.usuario.nombre=  nombre;
                this.usuario.imagen=  imagen;
                this.usuario.email= email;
                this.usuario.uid=  uid;
                this.usuario.provider= provider;
                this.guardarStorage(); //almacena el nombre en el local storage
  }

  // verificaUsuario(clave:string){
  //     clave = clave.toLowerCase();
  //
  //   return new Promise ((resolve, reject) => {
  //
  //       this.afDB.doc('/usuarios/${ clave }')
  //           .valueChanges().subscribe( data => {
  //               console.log(data);
  //
  //               resolve();
  //
  //           })
  //
  //   });
  // }

  borrarUsuario(){
          this.usuario.nombre=  null;
          this.usuario.imagen=  null;
          this.usuario.email= null;
          this.usuario.uid=  null;
          this.usuario.provider= null
  }

  guardarStorage(){
    if (this.platform.is('cordova')){
        //Celular
        	this.storage.set('nombre',this.usuario.nombre);
          console.log("se grabo el nombre desde celular");
          console.log(this.usuario.nombre);
    }else{
        //Escritorio
        localStorage.setItem('nombre',this.usuario.nombre);
        console.log("se grabo el nombre desde ecritorio");
        console.log(this.usuario.nombre);
          }
  }


cargarStorage(){
	return new Promise( (resolve,reject) => {

	if (this.platform.is('cordova')){
		      //Celular
		      this.storage.get('nombre').then( val => {
            if (val) {
              this.usuario.nombre = val;
              resolve(true);
            }else{
              resolve(false);
            }
        })
	}else{
        //Escritorio
		  if (localStorage.getItem ('nombre')){
          this.usuario.nombre = localStorage.getItem('nombre');
          resolve(true);
      }else{
          resolve(false);
            }
		  }
	});

}

eliminarStorage(){
    if (this.platform.is('cordova')){
        //Celular
          this.storage.set('nombre',"");
          console.log("se elimino el nombre desde celular");
          console.log(this.usuario.nombre);
    }else{
        //Escritorio
        localStorage.setItem('nombre',"");
        console.log("se elimino el nombre desde ecritorio");
        console.log(this.usuario.nombre);
          }
    }

}
