import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'home-user'
      },
      {
        path: 'home-user',
        loadChildren: () => import('./pages/home-user/home-user.module').then(m => m.HomeUserModule)
      },
      {
        path: 'userDetail/:id',
        loadChildren: () => import('./pages/user-detail/user-detail.module').then(m => m.UserDetailModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
