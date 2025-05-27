import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    userTypes = [
        { label: 'Customer', value: 'Customer' },
        { label: 'Freelancer', value: 'Freelancer' }
    ];

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            userLastName: ['', Validators.required],
            userEmail: ['', [Validators.required, Validators.email]],
            userPassword: ['', [Validators.required, Validators.minLength(6)]],
            userType: ['', Validators.required],
            userLocation: [''],
            userNumTel: [''],
            userBirthday: ['']
        });
    }

    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    }

    onSubmit(): void {
        if (this.registerForm.valid) {
            this.loading = true;
            const userData: User = this.registerForm.value;
            
            this.authService.register(userData).subscribe({
                next: (user) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Registration successful! Please login.'
                    });
                    this.router.navigate(['/login']);
                },
                error: (error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Registration failed. Please try again.'
                    });
                    this.loading = false;
                }
            });
        }
    }
} 