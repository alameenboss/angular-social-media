import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesProfilesComponent } from './companies-profiles/companies-profiles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full' }, 
  {path: 'home',component:HomeComponent}, 
  {path:"companies",component:CompaniesComponent},
  {path:"companyprofile",component:CompaniesProfilesComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
