import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InnCardModule } from 'src/app/shared/components/inn-card/inn-card.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    InnCardModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
