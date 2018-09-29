import { Injectable } from '@angular/core';

/*
  Generated class for the TrtlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrtlProvider {
  trtlWalletTotal: string = "420.69";

  constructor() {
    console.log('Hello TrtlProvider Provider');
  }

  getTrtlWalletTotal() {
    return this.trtlWalletTotal;
  }

}
