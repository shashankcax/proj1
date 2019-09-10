import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../materialModule';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { BuildingComponent } from './building/building.component';
import { RoomComponent } from './room/room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './tests/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    BuildingComponent,
    RoomComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
