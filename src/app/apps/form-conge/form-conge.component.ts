import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-conge',
  templateUrl: './form-conge.component.html',
  styleUrls: ['./form-conge.component.css']
})
export class FormCongeComponent implements OnInit {

  userlogin = true;
  userregister = false;

  // tslint:disable-next-line:typedef
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  // tslint:disable-next-line:typedef
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
