import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpontaneousMatchServiceProvider} from "../../providers/providers";
import {TabsPage} from "../pages";


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  submitAttempt: boolean = true;
  socialBridgeForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private spontaneousService: SpontaneousMatchServiceProvider,
  public loadingCtrl : LoadingController) {

    this.socialBridgeForm = formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  login(): void {
    let loading = this.loadingCtrl.create({
      content: 'Login in...'
    });
    loading.present();
    if (this.socialBridgeForm.valid) {
      let data = {
        'username': this.socialBridgeForm.value.userName,
        'password': this.socialBridgeForm.value.password
      };
      this.spontaneousService.generateCookie(data).subscribe(res => {
        let jsonRsponse= JSON.parse(res._body);
        let cookie = jsonRsponse.cookie;
        let status  = jsonRsponse.status;
        if(status.toLowerCase() !== 'error'){
          this.spontaneousService.setCookie(cookie);
          let nonceData = {
            'controller': 'userplus'.toString(),
            'method': 'add_post'.toString()
          };

          this.spontaneousService.getNonce(nonceData).subscribe(res => {
            let response  = JSON.parse(res._body);
            loading.dismiss();
            let status =response.status;
            if(status.toLowerCase()  === 'ok')
              this.navCtrl.setRoot(TabsPage);
            else
              this.submitAttempt = false;
          });

        } else {
          loading.dismiss();
          this.submitAttempt = false;
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
