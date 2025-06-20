import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'projects', loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule) },
    { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
