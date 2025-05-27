import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User, Customer, Freelancer } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private api: ApiService) { }

    // User operations
    register(user: User): Observable<User> {
        return this.api.post<User>('users/register', user);
    }

    login(credentials: { email: string, password: string }): Observable<{ token: string, user: User }> {
        return this.api.post<{ token: string, user: User }>('users/login', credentials);
    }

    getCurrentUser(): Observable<User> {
        return this.api.get<User>('users/me');
    }

    getUserById(id: string): Observable<User> {
        return this.api.get<User>(`users/${id}`);
    }

    updateUser(id: string, data: Partial<User>): Observable<User> {
        return this.api.put<User>('users', id, data);
    }

    // Customer operations
    registerCustomer(customer: Customer): Observable<Customer> {
        return this.api.post<Customer>('users/register', { ...customer, userType: 'Customer' });
    }

    // Freelancer operations
    registerFreelancer(freelancer: Freelancer): Observable<Freelancer> {
        return this.api.post<Freelancer>('users/register', { ...freelancer, userType: 'Freelancer' });
    }
} 