import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewClientComponent } from './components/view-client/view-client.component';
import { CallbackComponent} from './components/callback/callback.component';

const routes: Routes = [
  {
    path: 'registration',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewClientComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
