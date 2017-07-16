import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserNavBarComponent } from './user/user-nav-bar.component';
import { AdminNavBarComponent } from './admin/admin-nav-bar.component';
import { FileViewComponent } from './admin/file-view.component';
import { FileUploadComponent } from './user/file-upload.component';
import { UserWelcomeComponent } from './user/user-welcome.component';
import { SignupComponent } from './signup/signup.component';
import { AdminWelcomeComponent } from './admin/admin-welcome.component';
import { SignupConfirmComponent } from './signup/signup-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    UserNavBarComponent,
    AdminNavBarComponent,
    FileViewComponent,
    FileUploadComponent,
    UserWelcomeComponent,
    SignupComponent,
    AdminWelcomeComponent,
    SignupConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
