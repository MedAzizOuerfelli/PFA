import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Payment } from '../models/payment.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    constructor(private api: ApiService) { }

    createPayment(payment: Payment): Observable<Payment> {
        return this.api.post<Payment>('payments', payment);
    }

    getProjectPayments(projectId: string): Observable<Payment[]> {
        return this.api.get<Payment[]>(`payments/project/${projectId}`);
    }

    updatePaymentStatus(id: string, status: string): Observable<Payment> {
        return this.api.put<Payment>('payments', id, { paymentStatus: status });
    }

    getPaymentById(id: string): Observable<Payment> {
        return this.api.get<Payment>(`payments/${id}`);
    }

    deletePayment(id: string): Observable<void> {
        return this.api.delete<void>('payments', id);
    }
} 