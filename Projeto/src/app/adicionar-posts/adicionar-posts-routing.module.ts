import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPostsPage } from './adicionar-posts.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPostsPageRoutingModule {}
