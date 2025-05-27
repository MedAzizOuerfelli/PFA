import { Project } from './project.model';
import { Notification } from './notification.model';

export interface Payment {
    _id?: string;
    projectId: string | Project;
    notificationId?: string | Notification;
    paymentAmount: number;
    paymentDate: Date;
    paymentMethod: string;
    paymentStatus: string;
} 