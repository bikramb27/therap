import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { ResetPasswordComponent } from './user-auth/reset-password/reset-password.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { ProfileupdateComponent } from './user-auth/profileupdate/profileupdate.component';
import { AddserviceComponent } from './user-auth/addservice/addservice.component';
import { CreatePasswordComponent } from './user-auth/create-password/create-password.component';
const routes: Routes = [
{path: 'login' , component:LoginComponent},
{path: 'reset-password' , component: ResetPasswordComponent},
{path: 'create-password' , component:  CreatePasswordComponent},
{path: 'signup' , component: SignupComponent},
{path: 'profileupdate' , component: ProfileupdateComponent},
{path: 'addservice' , component:  AddserviceComponent},
{path: '' , redirectTo:  '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],   
  exports: [RouterModule]
})
export class AppRoutingModule { }
