import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerform!:FormGroup
  submitted=false;

  constructor(private formBuilder:FormBuilder,private router:Router){
  }
  emailpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required ,Validators.pattern(this.emailpattern)]],
      password:['',Validators.required],
      repassword:['',Validators.required],
      phonenumber:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
      zipcode:['',Validators.required],
      currency:['',Validators.required],
      language:['',Validators.required],

    })
  }
  signup(){
    this.submitted = true
    console.log(this.registerform.value)
    this.registerform.reset();
    this.router.navigate(['profileupdate'])
    if(this.registerform.invalid){
      return
    }
  }
  url="./assets/image/Therapimgsignup.png"
  logo="./assets/image/logo.png"
  fb="./assets/image/fb.png"
  google="./assets/image/google.png"
}
