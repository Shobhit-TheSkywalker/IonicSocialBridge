import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import OAuth from 'oauth/lib/oauth.js'
import nodeUrl from 'url/url.js'
/**
 * Generated class for the TwitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-twitter',
  templateUrl: 'twitter.html',
})
export class TwitterPage {

  oa = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'CKF7dOz80mqH73M0ZaZpy9VfV',
    'DpNStEDjoNTVDkSZ4lFpepxbFCYIYBbnDZbDggy4ue8IWts11W',
    '1.0',
    'http://localhost/callback',
    'HMAC-SHA1'
  );
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //OAuth.popup
    /*this.oa = new A('https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'clientID',
      'clientSecret',
      '1.0',
      'callbackURL',
      'HMAC-SHA1');*/
    //this.oa.getOAuth
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwitterPage');
  }

  /*login() {
    this.auth.login();
  }*/

}
