import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private api: ApiService) { }

    sendMessage(message: Message): Observable<Message> {
        return this.api.post<Message>('messages', message);
    }

    getConversation(userId: string, receiverId: string): Observable<Message[]> {
        return this.api.get<Message[]>(`messages/conversation/${userId}/${receiverId}`);
    }

    getUnreadMessages(userId: string): Observable<Message[]> {
        return this.api.get<Message[]>(`messages/unread/${userId}`);
    }

    markAsRead(messageId: string): Observable<Message> {
        return this.api.put<Message>('messages', messageId, { messageStatus: 1 });
    }

    deleteMessage(messageId: string): Observable<void> {
        return this.api.delete<void>('messages', messageId);
    }
} 