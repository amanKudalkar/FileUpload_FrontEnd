import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  email: string;
  errorStatus: boolean;
  successStatus: boolean;
  msg: String;


	constructor (private loginService: LoginService, private router : Router) {}
  ngOnInit() {
    this.msg = "";
     this.successStatus = false;
     this.errorStatus = false;
  }
  
  onSubmit() {
    this.loginService.signup(this.username,this.password,this.email).subscribe(
        data => this.onSuccessSignUp(data),
        error => this.onfailureSignUp(error)
      );
  }

  onSuccessSignUp(data:any){
     this.msg = data;
     this.successStatus = true;
     this.errorStatus = false;
  }

  onfailureSignUp(data:any){
      this.msg = data;
      this.successStatus = false;
      this.errorStatus = true;
  }

}
