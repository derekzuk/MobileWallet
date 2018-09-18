import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from '../send/send';
import { ReceivePage } from '../receive/receive';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
    this.navCtrl.push(ReceivePage);
  }  

}
