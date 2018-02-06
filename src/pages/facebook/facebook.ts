import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {OauthCordova} from 'ng2-cordova-oauth/platform/cordova';
import {Facebook} from 'ng2-cordova-oauth/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

declare var $ : any;

interface  IFacbookContent{
  id?: any,
  story?: any,
  link?: any,
  type?: any,
  picture?: any,
  full_picture?: any,
  message?: any
}


@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html'
})
export class FacebookPage{

  public oauth: OauthCordova;
  private provider: Facebook;
  facebookContent: IFacbookContent;
  nextListOfContent: string;
  loginSuccess: boolean = false;

  public constructor(public navCtrl: NavController, private platform: Platform, private http: HttpClient) {
    this.oauth = new OauthCordova();
    this.provider = new Facebook({
      clientId: "1807864452579635",
      //appScope: ['id','story','picture','link','type','full_picture','message']
      appScope: ['public_profile', 'user_posts']

    });
  }

  fetchPost(response: any): Observable<any> {
    return this.http.get("https://graph.facebook.com/v2.2/me/posts", {
      params: {
        access_token: response.access_token,
        fields: "id,story,picture,link,type,full_picture,message",
        format: "json"
      }
    }).pipe();
  }

  public login() {
    this.platform.ready().then(() => {
      this.oauth.logInVia(this.provider).then((success) => {
        this.fetchPost(success).subscribe(
          (response) => {
            this.facebookContent = response.data;
            this.loginSuccess = true;
            console.log(this.facebookContent);
          })
      }, (error) => {
        console.log(JSON.stringify(error));
      });
    });
  }
}


