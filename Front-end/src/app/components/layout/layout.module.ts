import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'projects',
                loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
            },
            {
                path: 'proposals',
                loadChildren: () => import('../proposals/proposals.module').then(m => m.ProposalsModule)
            },
            {
                path: 'messages',
                loadChildren: () => import('../messages/messages.module').then(m => m.MessagesModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
            }
        ]
    }
];

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ButtonModule,
        SidebarModule,
        MenuModule,
        DropdownModule,
        ToastModule
    ]
})
export class LayoutModule { } 