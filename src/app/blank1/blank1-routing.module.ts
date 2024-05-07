import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blank1Page } from './blank1.page';

const routes: Routes = [
  {
    path: '',
    component: Blank1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Blank1PageRoutingModule {}
