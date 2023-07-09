import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HomeUserComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class HomeUserRoutingModule { }
