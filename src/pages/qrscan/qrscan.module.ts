import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrscanPage } from './qrscan';
import { QRScanner } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    QrscanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrscanPage),
  ],
  providers: [
    QRScanner,
    BarcodeScanner
  ]
})
export class QrscanPageModule {}
