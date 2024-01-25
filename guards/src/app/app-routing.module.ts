import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { CanActiveGuard } from './shared/guards/can-active.guard';

// Components Pages
import { AccountComponent } from './shared/account/account.component';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactiveGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
