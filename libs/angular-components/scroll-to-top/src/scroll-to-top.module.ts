import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { WINDOW, _window } from './window.token';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, BrowserAnimationsModule],
  declarations: [ScrollToTopComponent],
  exports: [ScrollToTopComponent],
  providers: [{ provide: WINDOW, useFactory: _window }]
})
export class ScrollToTopModule {}
