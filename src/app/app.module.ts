import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Guardian } from './login/guardian.component';
import { LoginService } from './services/login.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HistorialComponent } from './historial/historial.component';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from './services/transacciones/transacciones.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CalculatorComponent,
    MenubarComponent,
    HistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Guardian, LoginService, TransaccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
