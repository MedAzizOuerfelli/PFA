import { User } from './user.model';
import { Notification } from './notification.model';

export interface Message {
    _id?: string;
    userId: string | User;
    receiverId: string | User;
    notificationId?: string | Notification;
    messageStatus: number;
    messageText: string;
    sendDate: Date;
    receivDate?: Date;
} 