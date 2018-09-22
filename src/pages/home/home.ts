import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from '../send/send';
import { ReceivePage } from '../receive/receive';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativePageTransitions: NativePageTransitions) {

  }

  test() {
    console.log("in test()");
  }

  navigateToSend() {
    console.log("navigating to Send page");
    this.navCtrl.push(SendPage);
  }

  navigateToReceive() {
    console.log("navigating to Receive page");
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
     };

    this.nativePageTransitions.slide(options);    
    this.navCtrl.push(ReceivePage);
  }  

}
