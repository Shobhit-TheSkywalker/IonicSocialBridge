import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage implements OnInit {

  private post : {};

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //this.post = this.navParams.get('data');
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }

  ngOnInit(){
    this.post = this.navParams.get('data');
  }
}
