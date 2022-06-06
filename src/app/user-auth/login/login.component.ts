import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  submitted=false;
  constructor(private formBuilder:FormBuilder,private router:Router,public translateService:TranslateService) { 
    translateService.addLangs(['en','de']);
    translateService.setDefaultLang('en')

  }
  emailpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  ngOnInit() {
    this.loginform = this.formBuilder.group({
   
    email:['',Validators.required ],
    password:['',[Validators.required,Validators.pattern(this.emailpattern)]],

  })
  }
  login(){
    this.submitted=true
    console.log(this.loginform.value)
    this.loginform.reset();
  }
  //language translate 
  translatesite(language:string){
    this.translateService.use(language)
  }
  url="./assets/image/login.png"
  loginlogo="./assets/image/Group 799.png"
  fb="./assets/image/fb.png"
  google="./assets/image/google.png"
}
