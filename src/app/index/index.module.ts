import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { KeyboardTestModule } from '../keyboard-test/keyboard-test.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    KeyboardTestModule
  ]
})
export class IndexModule { }
