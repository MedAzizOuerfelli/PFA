import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

export const routes: Routes = [

    { path: '' , loadComponent : ()=>import('./pages/home/home.component').then( c=>c.HomeComponent ) },
    { path: 'about' , loadComponent : ()=>import('./pages/about/about.component').then( c=>c.AboutComponent ) },
    { path: 'faq' , loadComponent : ()=>import('./pages/faq/faq.component').then( c=>c.FaqComponent ) },
    { path: 'services' , loadComponent : ()=>import('./pages/services/services.component').then( c=>c.ServicesComponent ) },
    { path: 'service/:id' , loadComponent : ()=>import('./pages/service/service.component').then( c=>c.ServiceComponent ) },

    { path: 'login' , canActivate: [loginGuard] , loadComponent : ()=>import('./pages/login/login.component').then( c=>c.LoginComponent ) },
    { path: 'register' , canActivate: [loginGuard] , loadComponent : ()=>import('./pages/register/register.component').then( c=>c.RegisterComponent ) },
    
    
    { path: 'client' , canActivate: [ authGuard ] , loadComponent : ()=>import('./pages/client/client.component').then( c=>c.ClientComponent ) , children: [

        { path: '' , loadComponent : ()=>import('./pages/client/stats/stats.component').then( c=>c.StatsComponent ) },
        { path: 'profile' , loadComponent : ()=>import('./pages/client/profile/profile.component').then( c=>c.ProfileComponent ) },
        { path: 'my-services' , loadComponent : ()=>import('./pages/client/my-services/my-services.component').then( c=>c.MyServicesComponent ) },
        { path: 'my-proposals' , loadComponent : ()=>import('./pages/client/proposals/proposals.component').then( c=>c.ProposalsComponent ) },
        { path: 'post' , loadComponent : ()=>import('./pages/client/post/post.component').then( c=>c.PostComponent ) },
        { path: 'service-proposals/:id' , loadComponent : ()=>import('./pages/client/service-proposals/service-proposals.component').then( c=>c.ServiceProposalsComponent ) },


    ] },


    

];
