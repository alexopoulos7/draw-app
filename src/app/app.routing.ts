import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/content.component';
import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoginComponent } from './components/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

