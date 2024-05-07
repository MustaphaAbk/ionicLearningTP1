import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blank2Page } from './blank2.page';

const routes: Routes = [
  {
    path: '',
    component: Blank2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Blank2PageRoutingModule {}
