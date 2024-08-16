import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, SharedModule],
  declarations: [HomePage, LoginComponent],
})
export class HomePageModule {}
