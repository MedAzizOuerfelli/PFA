import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor(private api: ApiService) { }

    createProject(project: Project): Observable<Project> {
        return this.api.post<Project>('projects', project);
    }

    getProjects(): Observable<Project[]> {
        return this.api.get<Project[]>('projects');
    }

    getProjectById(id: string): Observable<Project> {
        return this.api.get<Project>(`projects/${id}`);
    }

    updateProject(id: string, project: Partial<Project>): Observable<Project> {
        return this.api.put<Project>('projects', id, project);
    }

    deleteProject(id: string): Observable<void> {
        return this.api.delete<void>('projects', id);
    }

    getCustomerProjects(customerId: string): Observable<Project[]> {
        return this.api.get<Project[]>(`projects/customer/${customerId}`);
    }

    getFreelancerProjects(freelancerId: string): Observable<Project[]> {
        return this.api.get<Project[]>(`projects/freelancer/${freelancerId}`);
    }
} 