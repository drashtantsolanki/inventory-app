import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'admin', loadComponent: () => import('./Admin/admin.component').then(c => c.AdminComponent) },
];
