import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the ReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {
  trtlAddress: string = "trtl_123lskjafdlklsdjlfdjslkdfjlfkjsdlkdfsj";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private clipboard: Clipboard, 
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivePage');
  }

  copyAddressToClipboard() {
    console.log("Copying address to clipboard")
    this.clipboard.copy(this.trtlAddress);
  }

  ionViewCanLeave() {

  }

  returnToHome() {
    let options: NativeTransitionOptions = {
      direction: 'down',
      duration: 200,
     };

    this.nativePageTransitions.slide(options);    
    this.navCtrl.pop();    
  }

}
