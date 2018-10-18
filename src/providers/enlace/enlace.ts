import { Injectable } from '@angular/core';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';

@Injectable()
export class EnlaceProvider {

  constructor(  private theInAppBrowser: InAppBrowser) {
    //console.log('Hello EnlaceProvider Provider');
  }


}
