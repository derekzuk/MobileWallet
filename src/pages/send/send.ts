import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrscanPage } from '../qrscan/qrscan'
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { TrtlProvider } from '../../providers/trtl/trtl';

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
  maxValue: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public nativePageTransitions: NativePageTransitions,
    private trtlProvider: TrtlProvider) {
  }

  ionViewDidLoad() {
    this.maxValue = this.trtlProvider.getTrtlWalletTotal();
  }

  test() {
    console.log("in test()");
  }

  navigateToQRScan() {
    this.navCtrl.push(QrscanPage);
  }

  populateTrtlQuantityToSend(num: string) {
    if (this.trtlQuantityToSend == "0") {
      this.trtlQuantityToSend = num;
    } else {
      let newQuantity: string = this.trtlQuantityToSend.concat(num);
      if (+newQuantity > +this.maxValue) {
        this.trtlQuantityToSend = this.maxValue;
      } else {
        this.trtlQuantityToSend = this.trtlQuantityToSend.concat(num);
      }
    }
  }

  convertTrtlToDollars() {
    let dollarsValue = (+this.trtlQuantityToSend * this.trtlDollarConversionPercentage).toFixed(2);
    return "$" + dollarsValue;
  }

  decimalClicked() {
    if (this.trtlQuantityToSend.includes(".")) {
      // do nothing
    } else {
      this.trtlQuantityToSend = this.trtlQuantityToSend.concat(".");
    }
  }

  deleteClicked() {
    if (this.trtlQuantityToSend == "0") {
      // do nothing
    } else {
      this.trtlQuantityToSend = this.trtlQuantityToSend.slice(0, -1);
    }
  }

  setMax() {
    this.trtlQuantityToSend = this.maxValue;
  }

}
