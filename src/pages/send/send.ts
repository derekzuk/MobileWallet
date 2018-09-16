import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrscanPage } from '../qrscan/qrscan'

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
  trtlQuantityToSend: string = "0";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  test() {
    console.log("in test()");
  }

  navigateToQRScan() {
    console.log("navigating to QrscanPage page");
    this.navCtrl.push(QrscanPage);    
  }

  populateTrtlQuantityToSend(num: string) {
    if (this.trtlQuantityToSend == "0") {
      this.trtlQuantityToSend = num;
    } else {
      this.trtlQuantityToSend = this.trtlQuantityToSend.concat(num);
    }
  }

}
