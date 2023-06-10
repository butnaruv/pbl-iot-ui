import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { CheckUsernameResponse } from 'src/app/models/auth/check-username-response';
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
    if (this.entryForm.valid) {
      let username = this.entryForm.get(`username`)!.value!;

      this.isUserChecked = true;
      this.isUserRegistered = true;

      if (this.isUserRegistered) {
        this.buttonTitle = "Sign in"
      }
      else {
        this.buttonTitle = "Sign up"
      }

      // this.authService.checkUsername(username)
      //   .subscribe({
      //     next: (result: CheckUsernameResponse) => {
      //       this.isUserChecked = true;
      //       this.isUserRegistered = result.isUserRegistered;

      //       if (this.isUserRegistered) {
      //         this.buttonTitle = "Sign in"
      //       }
      //       else {
      //         this.buttonTitle = "Sign up"
      //       }
      //     },
      //     error: (error: HttpErrorResponse) => {
      //       console.log(error);
      //     }
      //   });
    }
  }
}
