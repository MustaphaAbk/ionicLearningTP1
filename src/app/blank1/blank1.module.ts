import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Blank1PageRoutingModule } from './blank1-routing.module';

import { Blank1Page } from './blank1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Blank1PageRoutingModule
  ],
  declarations: [Blank1Page]
})
export class Blank1PageModule {}
