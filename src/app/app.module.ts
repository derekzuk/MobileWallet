import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Clipboard } from '@ionic-native/clipboard';
import { Vibration } from '@ionic-native/vibration';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SendPageModule } from '../pages/send/send.module';
import { ReceivePageModule } from '../pages/receive/receive.module';
import { QrscanPageModule } from '../pages/qrscan/qrscan.module';
import { SettingsPageModule } from '../pages/settings/settings.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    SendPageModule,
    ReceivePageModule,
    QrscanPageModule,
    SettingsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Clipboard,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
