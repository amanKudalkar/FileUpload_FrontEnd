import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorStatus: boolean;
  errorMsg: String;

	constructor (private loginService: LoginService, private router : Router) {}
  ngOnInit() {
    this.errorStatus = false;
    this.errorMsg = "";
  }
  
  onSubmit() {
    this.loginService.sendCredential(this.username, this.password).subscribe(
        data => this.onSuccessLogin(data),
        error => this.onfailureLogin(error)
      );
  }

  onSuccessLogin(data:any){
     localStorage.setItem('UserType', data.authorities[0].authority);
     localStorage.setItem('username', this.username);
     localStorage.setItem('password', this.password);
     if(data.authorities[0].authority == "USER"){
        this.router.navigate(['/user']);
     }else if(data.authorities[0].authority == "ADMIN"){
       this.router.navigate(['/admin']);
     }
     this.errorMsg = "";
     this.errorStatus = false;
  }

  onfailureLogin(data:any){
      this.errorStatus = true;
      this.errorMsg = data;
  }

}
