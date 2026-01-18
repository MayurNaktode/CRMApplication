import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        loadComponent: () => import('./Layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
            }
        ]
    },
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    }
];
