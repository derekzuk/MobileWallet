import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from '../send/send';

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

}
