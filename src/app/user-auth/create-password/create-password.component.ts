import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {
  createpassword!:FormGroup
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.createpassword = this.formBuilder.group({
      newpassword:['',Validators.required],
      confirmpassword:['',Validators.required],
    })
  }
  create(){
    this.submitted = true
    console.log(this.createpassword.value)
    this.createpassword.reset();
  }
  url="./assets/image/login.png"
}
