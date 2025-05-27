import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TableModule,
        TagModule,
        ProgressSpinnerModule
    ]
})
export class DashboardModule { } 