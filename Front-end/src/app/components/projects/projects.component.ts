import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    user: User | null = null;
    isCustomer = false;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.currentUser$.subscribe(user => {
            this.user = user;
            this.isCustomer = user?.userType === 'Customer';
        });
    }
} 