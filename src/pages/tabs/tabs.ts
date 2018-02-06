import {Component} from '@angular/core';

import { SpontaneousPage, FacebookPage, TwitterPage } from '../pages';
//import { Nav} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //@ViewChild(Nav) nav: Nav;
  tab1Root = SpontaneousPage;
  tab2Root = FacebookPage;
  tab3Root = TwitterPage;

  constructor() {

  }

  /*openPage(pageName){
    this.nav.setRoot(pageName);
  }*/
}
