import {Component} from "@angular/core";

import { BarcodeScanner } from 'ionic-native';

declare var window: any

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  results: any;

  constructor() {}



  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      this.results = barcodeData;
      }, (err) => {
      		alert(`Error Scanning: ${err}`);
    });
  }

  reset() {
  	this.results = null;
  }

   lookup() {
     
alert(this.results.text);

window.open(`https://api.edmunds.com/api/vehicle/v2/vins/${this.results.text}?fmt=json&api_key=f8unz7ep5zfu2pb4vhkzt66w`, '_system');

  }


}
