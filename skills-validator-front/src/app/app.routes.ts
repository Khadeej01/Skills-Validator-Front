import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApprenantComponent } from './components/apprenant/apprenant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apprenants', component: ApprenantComponent }
];
