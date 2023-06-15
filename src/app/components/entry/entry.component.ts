import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { CheckUsernameResponse } from 'src/app/models/auth/check-username-response';
import { SignupRequest } from 'src/app/models/auth/signup-request';
import { SignupResponse } from 'src/app/models/auth/singup-response';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  entryForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  isUserChecked: boolean = false;
  isUserRegistered: boolean = false;
  buttonTitle: String = "Next";

  constructor(
    private readonly authService: AuthService,
  ) { }

  onClick() {
    // let username = this.entryForm.get(`username`)!.value!;

    // this.isUserChecked = true;
    // this.isUserRegistered = true;

    // if (this.isUserRegistered) {
    //   this.buttonTitle = "Sign in"
    // }
    // else {
    //   this.buttonTitle = "Sign up"
    // if (this.entryForm.valid) {
    //   }
    let signup: SignupRequest = {
      email: "marius@email.com",
      password: "/Password123",
      confirmPassword: "/Password123"
    }

    this.authService.register(signup)
      .subscribe({
        next: (result: SignupResponse) => {
          this.isUserChecked = true;
          // this.isUserRegistered = result.isUserRegistered;

          // if (this.isUserRegistered) {
          //   this.buttonTitle = "Sign in"
          // }
          // else {
          //   this.buttonTitle = "Sign up"
          // }
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
  }
}
