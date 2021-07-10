import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ngx-auth-firebaseui-signin-with-phone',
  templateUrl: './ngx-auth-firebaseui-signin-with-phone.component.html',
  styleUrls: ['./ngx-auth-firebaseui-signin-with-phone.component.scss']
})
export class NgxAuthFirebaseuiSigninWithPhoneComponent implements OnInit {
  authenticationError = false;

  @Input() cancelButtonText = "Cancel";
  @Input() signInWithPhoneButtonText = "Sign in with phone";
  @Input() signInWithEmailButtonText = "Sign in with email"

  get color(): string | ThemePalette {
    return this.authenticationError ? "warn" : "primary";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
