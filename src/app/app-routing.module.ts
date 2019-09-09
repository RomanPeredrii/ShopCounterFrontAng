import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { AdminComponent } from './pages/admin/admin.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {path: 'start', component: StartComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'work', component: WorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }