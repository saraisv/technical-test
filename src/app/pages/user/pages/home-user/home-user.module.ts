import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InnCardModule } from 'src/app/shared/components/inn-card/inn-card.module';
import { HomeUserComponent } from './home-user.component';
import { HomeUserRoutingModule } from './home-user.routing';


@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    InnCardModule,
    HomeUserRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeUserModule { }
