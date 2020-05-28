import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPostsPageRoutingModule } from './adicionar-posts-routing.module';

import { AdicionarPostsPage } from './adicionar-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPostsPageRoutingModule
  ],
  declarations: [AdicionarPostsPage]
})
export class AdicionarPostsPageModule {}
