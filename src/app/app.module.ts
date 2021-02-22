import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
