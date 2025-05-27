import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private _user: UserService,
    private router: Router
  ) {
    let controls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required])
    };

    this.registerForm = fb.group(controls);
  }

  createAccount() {
    if (this.registerForm.valid) {
      const userData: User = {
        firstname: this.registerForm.value.firstname,
        lastname: this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phone: this.registerForm.value.phone,
        location: this.registerForm.value.location,
        birthday: this.registerForm.value.birthday
      };

      this._user.register(userData).subscribe({
        next: (res: User) => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'An error occurred during registration';
          console.error('Registration error:', err);
        }
      });
    }
  }
}
