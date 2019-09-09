import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: 'building', component: BuildingComponent,outlet: 'sideBar'},
  { path: 'room', component: RoomComponent, outlet: 'sideBar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
