import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
