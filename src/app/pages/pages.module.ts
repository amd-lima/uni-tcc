import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { CoachComponent } from './coach/coach.component';
import { PagesRoutingModule } from './pages-routing.module';
import { StudentComponent } from './student/student.component';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PagesRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [StudentComponent, CoachComponent],
})

export class PagesModule {}
