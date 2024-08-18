import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
