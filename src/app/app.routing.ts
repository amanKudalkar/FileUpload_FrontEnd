import { SignupConfirmComponent } from './signup/signup-confirm.component';
import { LoginComponent } from './Login/login.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { USER_ROTES } from './user/user.routing';
import { SignupComponent } from './signup/signup.component'
import { ADMIN_ROTES } from './admin/admin.routing';

const appRoutes: Routes = [
  { path: 'admin',  component: AdminComponent, children: ADMIN_ROTES },
  { path: 'user',  component: UserComponent , children: USER_ROTES},
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'verifyEmail/:email/:randompkt',  component: SignupConfirmComponent },
  { path: '', redirectTo: '/login',pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);