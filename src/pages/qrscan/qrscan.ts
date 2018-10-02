import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { TrtlProvider } from '../../providers/trtl/trtl';

/**
 * Generated class for the QrscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrscan',
  templateUrl: 'qrscan.html',
})
export class QrscanPage {
  scanSub;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private qrScanner: QRScanner,
    private trtlProvider: TrtlProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrscanPage');

    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         console.log("Scanner status authorized");
         // camera permission was granted

         window.document.querySelector('body').classList.add('transparent-body');
         this.qrScanner.show();
         
         // start scanning
         this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.trtlProvider.setQrScanResult(text);

            this.scanSub.unsubscribe(); // stop scanning           
            this.navigateToSend();
         });

       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  ionViewCanLeave() {
    this.scanSub.unsubscribe();
    window.document.querySelector('body').classList.remove('transparent-body');
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }

  navigateToSend() {
    this.navCtrl.pop();
  }

}