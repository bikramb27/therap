import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import {CoolSocialLoginButtonsModule} from '@angular-cool/social-login-buttons';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AddserviceComponent } from './addservice/addservice.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    SignupComponent,
    ProfileupdateComponent,
    AddserviceComponent,
    LoginComponent,
    ResetPasswordComponent,
    CreatePasswordComponent,
     
    
  ],
  imports: [
    CommonModule,
    CoolSocialLoginButtonsModule,
    ReactiveFormsModule,
    RouterModule ,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:translateFactory,deps:[HttpClient]
      }
    })
  ],
  exports:[
    SignupComponent,
    ProfileupdateComponent,
    AddserviceComponent,
    LoginComponent,
    ResetPasswordComponent,
    CreatePasswordComponent
  ]
})
export class UserAuthModule { }
export function translateFactory(httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient);
}