import { LoginService } from './../login.service';
import { LoginComponent } from './../Login/login.component';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";


@Component({
  selector: 'app-signup-confirm',
  templateUrl: './signup-confirm.component.html',
  styles: [`h1 {
          text-align: center;
          color: #8f8f8f;
          font-weight: 300;
          font-size: 25px;
    }`]
})
export class SignupConfirmComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  email:string;
  randompkt:string;
  errorStatus: boolean;
  successStatus: boolean;
  msg: String;
  constructor(private router: Router, private loginService: LoginService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.email = params['email'];
        this.randompkt = params['randompkt'];
      }
    );
    this.loginService.verifyEMail(this.email,this.randompkt).subscribe(
        data => this.onSuccessSignUpConfirm(data),
        error => this.onfailureSignUpConfirm(error)
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSuccessSignUpConfirm(data:any){
     this.msg = data;
     this.successStatus = true;
     this.errorStatus = false;
  }

  onfailureSignUpConfirm(data:any){
      this.msg = data;
      this.successStatus = false;
      this.errorStatus = true;
  }

  

}
