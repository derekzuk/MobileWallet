import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendPage } from './send';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    SendPage,
  ],
  imports: [
    IonicPageModule.forChild(SendPage),
  ],
  providers: [
    Camera
  ]
})
export class SendPageModule {}
