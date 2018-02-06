import {Injectable} from '@angular/core';
import {isUndefined} from "ionic-angular/util/util";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {RequestOptions, RequestMethod, Http, Headers} from "@angular/http";

@Injectable()
export class SpontaneousMatchServiceProvider {
  private KEY: string = '204b4fa8aee15f497fcf2ee8';
  private API_END_POINT: string = 'http://spontaneousmatch.ca/api/userplus/';
  private _cookie: string;
  private header;

  constructor(public _$http: Http) {
    this.header = new Headers();
    console.log('Hello SpontaneousMatchServiceProvider Provider');
  }

  getCookie(): string {
    return this._cookie;
  }

  setCookie(value: string) {
    this._cookie = value;
  }

  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

  generateCookie(data: {}, header_data?: any): Observable<any> {
    let postContent = {key: this.KEY};
    postContent = {...postContent, ...data};
    if (isUndefined(header_data)) {
      this.header.set('Content-Type', 'application/x-www-form-urlencoded');
    } else {
      this.header.set('Content-Type', header_data);
    }
    let bodyString = this.serializeObj(postContent); // Stringify payload
    let options = new RequestOptions({method: RequestMethod.Post, headers: this.header});
    return this._$http.post(this.API_END_POINT + 'generate_auth_cookie', bodyString, options).pipe(
      tap(res => {
        console.log(res);
      })
    );
  };

  getNonce(data: {}): Observable<any> {
    this.header.set('Content-Type', 'application/x-www-form-urlencoded');
    let bodyString = this.serializeObj(data); // Stringify payload
    let options = new RequestOptions({method: RequestMethod.Post, headers: this.header});
    return this._$http.post('http://spontaneousmatch.ca/api/get_nonce/', bodyString, options).pipe(tap(
      res => {
        //let nonceREs = JSON.parse(res);
        console.log('response : ' + res)
      }
    ));
  };


  fetchPost() : Observable<any> {
    return this._$http.get('http://spontaneousmatch.ca/wp-json/wp/v2/social').pipe(tap(
      res=> console.log(res)));
  };
}
