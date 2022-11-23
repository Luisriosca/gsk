import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardTestComponent } from './keyboard-test.component';
import { KeypressedIndicatorComponent } from './components/keypressed-indicator/keypressed-indicator.component';
import { TextToFollowComponent } from './components/text-to-follow/text-to-follow.component';


@NgModule({
  declarations: [
    KeyboardTestComponent,
    KeypressedIndicatorComponent,
    TextToFollowComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KeyboardTestComponent,
    KeypressedIndicatorComponent,
    TextToFollowComponent
  ]
})
export class KeyboardTestModule { }
