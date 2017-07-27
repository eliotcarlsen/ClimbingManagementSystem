import { RouterModule } from '@angular/router';

import { DashboardHomeComponent } from './components/home/home.component';

export const DashboardRoutes = RouterModule.forRoot([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
    // canActivate: [AuthGuardService],
    // canLoad: [AuthGuardService],
  },
])
