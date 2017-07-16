import { GlobalConstant } from './global-constant';
import { Injectable } from '@angular/core';
import {Http, Headers,Response,URLSearchParams} from '@angular/http';
import { Observable } from "rxjs/Rx";

import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor (private http: Http) {}

  sendCredential(username: string, password: string) {
    let url = GlobalConstant.API_ENDPOINT+"/login";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic " + btoa(username + ":" + password)
    });
    return this.http.post(url, params, {headers: headers}).map((data: Response) => data.json()).catch(this.handleError);
  }

   signup(username: string, password: string, email:string) {
    let url = GlobalConstant.API_ENDPOINT+"/signup";
    let params = 'username='+username+'&password='+password+'&email='+email;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(url, params, {headers: headers})
      .map((data: Response) => data.text())
      .catch(this.handleError);
  }


  logout(username: string, password: string) {
     let url = GlobalConstant.API_ENDPOINT+"/logoutAll";
     let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic " + btoa(username + ":" + password)
    });
     return this.http.get(url, { headers: headers}).map((data: Response) => data).catch(this.handleError);
   }

   private handleError (error: any) {
    return Observable.throw(error._body);
  }

  verifyEMail(email: string, randomPkt: string){
     let url = GlobalConstant.API_ENDPOINT+"/verifyEmail";
     let params: URLSearchParams = new URLSearchParams();
     params.set('email', email);
     params.set('randomPkt', randomPkt);
     return this.http.get(url,{search: params}).map((data: Response) => data.text()).catch(this.handleError);
  }



}
