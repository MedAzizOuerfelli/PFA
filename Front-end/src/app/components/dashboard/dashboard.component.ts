import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProposalService } from '../../services/proposal.service';
import { MessageService } from '../../services/message.service';
import { NotificationService } from '../../services/notification.service';
import { Project } from '../../models/project.model';
import { Proposal } from '../../models/proposal.model';
import { Message } from '../../models/message.model';
import { Notification } from '../../models/notification.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    projects: Project[] = [];
    proposals: Proposal[] = [];
    messages: Message[] = [];
    notifications: Notification[] = [];
    loading = true;

    constructor(
        private projectService: ProjectService,
        private proposalService: ProposalService,
        private messageService: MessageService,
        private notificationService: NotificationService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        const currentUser = this.authService.getCurrentUser();
        if (currentUser) {
            this.loadDashboardData(currentUser._id!, currentUser.userType);
        }
    }

    private loadDashboardData(userId: string, userType: string): void {
        this.loading = true;

        if (userType === 'Customer') {
            this.projectService.getCustomerProjects(userId).subscribe(projects => {
                this.projects = projects;
            });
        } else {
            this.projectService.getFreelancerProjects(userId).subscribe(projects => {
                this.projects = projects;
            });
            this.proposalService.getProposalsByFreelancer(userId).subscribe(proposals => {
                this.proposals = proposals;
            });
        }

        this.messageService.getUnreadMessages(userId).subscribe(messages => {
            this.messages = messages;
        });

        this.notificationService.getUnreadNotifications().subscribe(notifications => {
            this.notifications = notifications;
        });

        this.loading = false;
    }
} 