import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';


export interface Credenciales{  nombre?: string;
                                imagen?: string;
                                email?: string;
                                uid?: string;
                                provider?: string}


@Injectable()
export class UsuarioProvider {

  usuario: Credenciales = {};

  constructor(
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
                this.usuario.provider= provider
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

}
