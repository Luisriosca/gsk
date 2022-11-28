import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { KeyboardTestModule } from './keyboard-test/keyboard-test.module';
import { DirectivesDirective } from './directives/directives.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    KeyboardTestModule,
    DirectivesDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
