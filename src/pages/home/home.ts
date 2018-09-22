import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from '../send/send';
import { ReceivePage } from '../receive/receive';
import { SettingsPage } from '../settings/settings';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativePageTransitions: NativePageTransitions) {

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
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
      duration: 350,
     };

    this.nativePageTransitions.slide(options);    
    this.navCtrl.push(ReceivePage);
  }  

  navigateToSettings() {
    console.log("navigating to Settings page");
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 350,
     };

    this.nativePageTransitions.slide(options);    
    this.navCtrl.push(SettingsPage);    
  }

}
