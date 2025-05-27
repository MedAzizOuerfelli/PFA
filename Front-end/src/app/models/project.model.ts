import { Customer } from './customer.model';
import { Freelancer } from './freelancer.model';

export interface Project {
    _id?: string;
    userId: string | Customer;
    projectTitle: string;
    projectDescription: string;
    projectBudget: number;
    projectStatus: string;
    projectDeadline: Date;
    projectStartDate?: Date;
    workers?: (string | Freelancer)[];
} 