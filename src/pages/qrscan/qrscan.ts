import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrscanPage');

    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
        window.document.querySelector('body').classList.add('transparent-body');
         console.log("Scanner status authorized");
         // camera permission was granted

         // start scanning
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);
          
           scanSub.unsubscribe(); // stop scanning           
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
 
    this.qrScanner.show();
  }

  ionViewCanLeave() {
    window.document.querySelector('body').classList.remove('transparent-body');
    this.qrScanner.hide(); 
  }

  navigateToSend() {
    console.log("navigating to Send page");
    this.navCtrl.pop();
  }

}