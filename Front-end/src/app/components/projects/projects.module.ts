import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'create', component: ProjectCreateComponent },
            { path: ':id', component: ProjectDetailComponent }
        ]
    }
];

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectCreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        CalendarModule,
        InputNumberModule,
        InputTextareaModule,
        TagModule,
        CardModule,
        ProgressSpinnerModule
    ]
})
export class ProjectsModule { } 