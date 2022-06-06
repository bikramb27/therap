import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
  updatedetailsform!:FormGroup
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.updatedetailsform=this.formBuilder.group({
      selectservice:['',Validators.required]
    })

  }

  updated(){
    this.submitted=true
    console.log(this.updatedetailsform.value)
    this.updatedetailsform.reset();
  }

update="./assets/image/update.png"
iicon="./assets/image/iicon.png"
group="./assets/image/Group.png"
gcalendar="./assets/image/google-calendar.png"
whatsapp="./assets/image/whatsapp_logo.png"
zoom="./assets/image/zoom-logo.png"
}
