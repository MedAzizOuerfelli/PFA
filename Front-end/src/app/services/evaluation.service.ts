import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Evaluation } from '../models/evaluation.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EvaluationService {
    constructor(private api: ApiService) { }

    createEvaluation(evaluation: Evaluation): Observable<Evaluation> {
        return this.api.post<Evaluation>('evaluations', evaluation);
    }

    getProjectEvaluations(projectId: string): Observable<Evaluation[]> {
        return this.api.get<Evaluation[]>(`evaluations/project/${projectId}`);
    }

    getFreelancerEvaluations(freelancerId: string): Observable<Evaluation[]> {
        return this.api.get<Evaluation[]>(`evaluations/freelancer/${freelancerId}`);
    }

    updateEvaluation(id: string, evaluation: Partial<Evaluation>): Observable<Evaluation> {
        return this.api.put<Evaluation>('evaluations', id, evaluation);
    }

    deleteEvaluation(id: string): Observable<void> {
        return this.api.delete<void>('evaluations', id);
    }
} 