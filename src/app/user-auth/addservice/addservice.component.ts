import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addservice="./assets/image/addserviceimage.png"
  iicon="./assets/image/iicon.png"
  group="./assets/image/Group.png"
  gcalendar="./assets/image/google-calendar.png"
whatsapp="./assets/image/whatsapp_logo.png"
zoom="./assets/image/zoom-logo.png"
}
