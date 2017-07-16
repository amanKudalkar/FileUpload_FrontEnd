import { Injectable } from '@angular/core';
import { GlobalConstant } from './global-constant';
import {Http, Headers,Response} from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor (private http:Http){}

  uploadFile(file: File, username: string, password: string) {
      let url = GlobalConstant.API_ENDPOINT+"/user/uploadFile";
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      formData.append('username', username);
       let headers = new Headers(
       {
          "Authorization": "Basic " + btoa(username + ":" + password)
        });
        return this.http.post(url, formData, {headers: headers}).map((data: Response) => data.text()).catch(this.handleError);
  }

  getDocuments(username: string, password: string) {
     let url = GlobalConstant.API_ENDPOINT+"/admin/getDocuments";
     let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic " + btoa(username + ":" + password)
    });
     return this.http.get(url, { headers: headers}).map((data: Response) => data.text()).catch(this.handleError);
   }


   downloadFile(username: string, password: string, fileName:string) {
    let url = GlobalConstant.API_ENDPOINT+"/admin/downloadFile";
    let params = 'fileName='+fileName;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic " + btoa(username + ":" + password)
    });
    return this.http.post(url, params, {headers: headers})
      .map((data: Response) => data.text())
      .catch(this.handleError);
  }


   private handleError (error: any) {
    return Observable.throw(error._body);
  }


}
