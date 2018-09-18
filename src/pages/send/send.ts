import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrscanPage } from '../qrscan/qrscan'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

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
  trtlDollarConversionPercentage = 0.0005;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
  }

  test() {
    console.log("in test()");
  }

  navigateToQRScan() {
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0
     };

    window.document.querySelector('body').classList.add('black-body');
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(QrscanPage);
  }

  populateTrtlQuantityToSend(num: string) {
    if (this.trtlQuantityToSend == "0") {
      this.trtlQuantityToSend = num;
    } else {
      this.trtlQuantityToSend = this.trtlQuantityToSend.concat(num);
    }
  }

  convertTrtlToDollars() {
    let dollarsValue = (+this.trtlQuantityToSend * this.trtlDollarConversionPercentage).toFixed(2);
    return "$" + dollarsValue;
  }

}
