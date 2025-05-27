import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            this.loading = true;
            this.authService.login(
                this.loginForm.value.email,
                this.loginForm.value.password
            ).subscribe({
                next: (response) => {
                    this.authService.setUser(response.user, response.token);
                    this.router.navigate(['/dashboard']);
                },
                error: (error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Invalid credentials'
                    });
                    this.loading = false;
                }
            });
        }
    }
} 