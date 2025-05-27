import { Project } from './project.model';
import { Notification } from './notification.model';

export interface Proposal {
    _id?: string;
    projectId: string | Project;
    notificationId?: string | Notification;
    proposalAmount: number;
    proposalDeadline: Date;
    proposalStatus: string;
    proposalDate: Date;
    proposalText: string;
} 