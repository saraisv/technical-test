import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'activities',
        loadChildren: () => import('./pages/activities/activities.module').then(m => m.ActivitiesModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
