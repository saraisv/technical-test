import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnCardComponent } from './inn-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InnCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    InnCardComponent
  ]
})
export class InnCardModule { }
