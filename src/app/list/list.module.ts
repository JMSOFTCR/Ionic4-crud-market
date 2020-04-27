import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
    
  ],
  declarations: [ListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListPageModule {}
