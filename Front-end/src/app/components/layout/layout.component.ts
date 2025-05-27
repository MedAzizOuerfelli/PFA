import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    user: User | null = null;
    sidebarVisible = false;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.currentUser$.subscribe(user => {
            this.user = user;
        });
    }

    logout(): void {
        this.authService.logout();
    }

    toggleSidebar(): void {
        this.sidebarVisible = !this.sidebarVisible;
    }
} 