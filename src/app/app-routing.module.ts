import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Guardian } from './login/guardian.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {path:'', component:CalculatorComponent},
  {path:'perfil', component:HomeComponent, canActivate:[Guardian]},
  {path:'login', component: LoginComponent},
  {path: 'historial', component:HistorialComponent, canActivate:[Guardian]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
