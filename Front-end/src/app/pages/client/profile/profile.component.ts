import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: User | null = null;
  userId: string = '';

  image: File | null = null;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private _user: UserService) {
    let controls = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      location: new FormControl(''),
      birthday: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
    };

    this.registerForm = fb.group(controls);
  }

  selectImage(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

  ngOnInit(): void {
    this.userId = this._user.getUserIdFromToken();

    this._user.getUserById(this.userId).subscribe({
      next: (res: User) => {
        this.user = res;
        this.registerForm.patchValue({
          firstname: res.firstname,
          lastname: res.lastname,
          email: res.email,
          location: res.location || '',
          birthday: res.birthday || '',
          phone: res.phone || ''
        });
      }
    });
  }

  save() {
    let fd = new FormData();
    
    // Required fields
    fd.append('firstname', this.registerForm.value.firstname);
    fd.append('lastname', this.registerForm.value.lastname);
    fd.append('email', this.registerForm.value.email);
    
    // Optional fields
    if (this.registerForm.value.location) {
      fd.append('location', this.registerForm.value.location);
    }
    if (this.registerForm.value.birthday) {
      fd.append('birthday', this.registerForm.value.birthday);
    }
    if (this.registerForm.value.phone) {
      fd.append('phone', this.registerForm.value.phone);
    }
    if (this.registerForm.value.password) {
      fd.append('password', this.registerForm.value.password);
    }
    if (this.image) {
      fd.append('image', this.image);
    }

    this._user.updateUser(this.userId, fd).subscribe({
      next: (res: User) => {
        window.location.reload();
      },
      error: (err: Error) => {
        console.error('Error updating profile:', err);
      }
    });
  }
}
