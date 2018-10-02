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
  trtlAddress: string = "TRTLv2MxqomYoBNjKD1jPeQBRZ6ghG9xpED51C3uSv2VDNgt7u8fHVtA8oEF5sjXC7U1kavfTLAPQKKoPUodidGuDULqYNXihwJ";

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
      duration: 350,
     };

    this.nativePageTransitions.slide(options);    
    this.navCtrl.pop({animate:false});    
  }

}
