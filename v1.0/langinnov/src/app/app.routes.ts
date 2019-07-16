import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { AuthGuard } from './core/services/auth-guard.service';


export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'construction',
    component: UnderConstructionComponent,
    canActivate: [AuthGuard]
  },
  /*{
    path: 'demo',
    component: DemoComponent
  },*/
  /*{
    path: 'blog',
    component: BlogComponent,
    loadChildren: './blog/blog.module#BlogModule'
  },*/
  {
    path: '**',
    redirectTo: 'home'
  }
];

