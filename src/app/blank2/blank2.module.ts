import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Blank2PageRoutingModule } from './blank2-routing.module';

import { Blank2Page } from './blank2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Blank2PageRoutingModule
  ],
  declarations: [Blank2Page]
})
export class Blank2PageModule {}
