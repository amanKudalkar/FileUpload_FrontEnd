import { Router } from '@angular/router';
import { AdminComponent } from './../admin/admin.component';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styles: []
})
export class UserNavBarComponent implements OnInit {

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
