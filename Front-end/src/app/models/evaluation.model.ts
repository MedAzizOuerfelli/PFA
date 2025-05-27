import { Project } from './project.model';
import { Freelancer } from './freelancer.model';

export interface Evaluation {
    _id?: string;
    projectId: string | Project;
    userId: string | Freelancer;
    evaluationScore: number;
    evaluationComment?: string;
    evaluationDate: Date;
} 