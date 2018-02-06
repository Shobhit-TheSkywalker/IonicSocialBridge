import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {SpontaneousMatchServiceProvider} from "../../providers/providers";

@IonicPage()
@Component({
  selector: 'page-spontaneous',
  templateUrl: 'spontaneous.html',
})
export class SpontaneousPage {

  private rootPage;
  private spontaneousPost : any;
  private refresh : any;


  constructor(private spontaneousService  : SpontaneousMatchServiceProvider) {
  }

  /*view($event, data){
    this.modalContainer = this.modal.create(ModalPage, {'data' : data});
    this.modalContainer.present();
  }*/

  openPage(p) {
    this.rootPage = p;
  }

  ionViewDidLoad() {
    this.spontaneousService.fetchPost().subscribe(res=>
    {
      this.spontaneousPost = JSON.parse(res._body);
      if(this.refresh._isEnabled) {
        this.refresh.complete();
      }
    });
    console.log('ionViewDidLoad SpontaneousPage');
  }

  refreshFeed(refresher) {
    this.refresh = refresher;
    this.ionViewDidLoad();
    console.log("is refrsh" + refresher);
  }

}
