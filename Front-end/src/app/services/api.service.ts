import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    // Generic CRUD operations
    get<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
    }

    post<T>(endpoint: string, data: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data);
    }

    put<T>(endpoint: string, id: string, data: any): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, data);
    }

    delete<T>(endpoint: string, id: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}/${endpoint}/${id}`);
    }
} 