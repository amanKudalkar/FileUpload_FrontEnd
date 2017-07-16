import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styles: []
})
export class AdminNavBarComponent implements OnInit {

   constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout(localStorage.getItem('username'),localStorage.getItem('password')).subscribe(
			res => {
				localStorage.setItem('UserType', '');
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
			},
			err => console.log(err)
			);
		this.router.navigate(['/login']);
	}

}
