import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Notification } from '../models/notification.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor(private api: ApiService) { }

    getNotifications(): Observable<Notification[]> {
        return this.api.get<Notification[]>('notifications');
    }

    getUnreadNotifications(): Observable<Notification[]> {
        return this.api.get<Notification[]>('notifications/unread');
    }

    markAsRead(notificationId: string): Observable<Notification> {
        return this.api.put<Notification>('notifications', notificationId, { notificationStatus: 1 });
    }

    markAllAsRead(): Observable<void> {
        return this.api.put<void>('notifications/mark-all-read', '', {});
    }

    deleteNotification(notificationId: string): Observable<void> {
        return this.api.delete<void>('notifications', notificationId);
    }
} 