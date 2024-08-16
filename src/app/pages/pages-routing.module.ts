import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: 'coach',
    component: CoachComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
