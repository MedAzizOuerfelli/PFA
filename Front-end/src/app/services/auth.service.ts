import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        // Check for stored token and user on initialization
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            this.currentUserSubject.next(JSON.parse(user));
        }
    }

    login(email: string, password: string): Observable<{ token: string, user: User }> {
        return this.userService.login({ email, password });
    }

    register(user: User): Observable<User> {
        return this.userService.register(user);
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    setUser(user: User, token: string): void {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.value;
    }
} 