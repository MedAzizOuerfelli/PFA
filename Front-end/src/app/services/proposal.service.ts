import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Proposal } from '../models/proposal.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProposalService {
    constructor(private api: ApiService) { }

    createProposal(proposal: Proposal): Observable<Proposal> {
        return this.api.post<Proposal>('proposals', proposal);
    }

    getProposalsByProject(projectId: string): Observable<Proposal[]> {
        return this.api.get<Proposal[]>(`proposals/project/${projectId}`);
    }

    getProposalsByFreelancer(freelancerId: string): Observable<Proposal[]> {
        return this.api.get<Proposal[]>(`proposals/freelancer/${freelancerId}`);
    }

    updateProposal(id: string, proposal: Partial<Proposal>): Observable<Proposal> {
        return this.api.put<Proposal>('proposals', id, proposal);
    }

    acceptProposal(id: string): Observable<Proposal> {
        return this.api.put<Proposal>('proposals', id, { proposalStatus: 'accepted' });
    }

    rejectProposal(id: string): Observable<Proposal> {
        return this.api.put<Proposal>('proposals', id, { proposalStatus: 'rejected' });
    }
} 