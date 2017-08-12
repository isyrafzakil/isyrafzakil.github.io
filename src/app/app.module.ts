import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';

import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
