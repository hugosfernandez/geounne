import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

//prueba
//import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';


declare var google;

@IonicPage()
@Component({
  selector: 'page-pagina5',
  templateUrl: 'pagina5.html',
})
export class Pagina5Page {

  dependencia:any = {};
  map: any;
  directionsService: any = null;
  directionsDisplay: any = null;
  bounds: any = null;
  myLatLng: any;


  miubicacion_lat: any;
  miubicacion_lng: any;

  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                private geolocation: Geolocation
                //public _ubicacionProvider: UbicacionProvider
                            ) {

                  this.dependencia = navParams.get('dependencia');
                  //console.log(this.dependencia.nombre);
                  //console.log(navParams);
                  this.directionsService = new google.maps.DirectionsService();
                  this.directionsDisplay = new google.maps.DirectionsRenderer();
                  this.bounds = new google.maps.LatLngBounds();
                }



  ionViewDidLoad(){
    this.getPosition();
  }



  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.miubicacion_lat = response.coords.latitude;
      this.miubicacion_lng = response.coords.longitude;
      //console.log(response);
      this.loadMap(response);

    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
    let panelEle: HTMLElement = document.getElementById('panel');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
    this.myLatLng = myLatLng;
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(panelEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  private calculateRoute(){
    this.bounds.extend(this.myLatLng);

    // this.map.fitBounds(this.bounds);

    this.directionsService.route({
        //origin: new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng),
        origin: new google.maps.LatLng(this.miubicacion_lat, this.miubicacion_lng),
        destination: new google.maps.LatLng(this.dependencia.lat, this.dependencia.lng),
        //waypoints: this.waypoints,
        // optimizeWaypoints: true,
        //travelmode ->  la forma en que queremos recorrer esa ruta
        travelMode: google.maps.TravelMode.WALKING,
        //"WALKING", "BICYCLING", "TRANSIT", DRIVING
        //avoidTolls = si esta true es para evitar peajes
        // avoidTolls: true
      }, (response, status)=> {
        if(status === google.maps.DirectionsStatus.OK) {
          //console.log(response);
          this.directionsDisplay.setDirections(response);
        }else{
          alert('Could not display directions due to: ' + status);
        }
      });
  }


}
