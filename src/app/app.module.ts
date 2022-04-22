import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { FIFOService } from './service/FIFO.service';
import { LIFOService } from './service/LIFO.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LIFOService, FIFOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
