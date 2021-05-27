import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SellerLoginRegisterComponent } from './components/seller-login-register/seller-login-register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sellerLoginReg', component: SellerLoginRegisterComponent},
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }


