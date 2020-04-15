import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';            //<---
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //<---

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { AltaempleadoComponent } from './altaempleado/altaempleado.component';
import { ReporteempleadoComponent } from './reporteempleado/reporteempleado.component';
import { EditarempleadoComponent } from './editarempleado/editarempleado.component';

import { AltasucursalComponent } from './altasucursal/altasucursal.component';
import { EditarsucursalComponent } from './editarsucursal/editarsucursal.component';
import { ReportesucursalComponent } from './reportesucursal/reportesucursal.component';

import { AltaareaComponent } from './areas/altaarea/altaarea.component';

import { PrincipalloginComponent } from './login/principallogin/principallogin.component';
import { EmailComponent } from './login/email/email.component';
import { PasswordComponent } from './login/password/password.component';
import { EntrarComponent } from './login/entrar/entrar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FechasComponent } from './solicitar/fechas/fechas.component';
import { DiasComponent } from './solicitar/dias/dias.component';
import { CancelarComponent } from './solicitar/cancelar/cancelar.component';
import { PeriodoiniComponent } from './solicitar/periodoini/periodoini.component';
import { PeriodofinComponent } from './solicitar/periodofin/periodofin.component';
import { EnviarComponent } from './solicitar/enviar/enviar.component';
import { PrincipalsolicitarComponent } from './solicitar/principalsolicitar/principalsolicitar.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    
    AltaempleadoComponent,
    ReporteempleadoComponent,
    EditarempleadoComponent,
    AltasucursalComponent,
    EditarsucursalComponent,
    ReportesucursalComponent,
   
    AltaareaComponent,
   
    PrincipalloginComponent,
   
    EmailComponent,
   
    PasswordComponent,
   
    EntrarComponent,
   
    HeaderComponent,
   
    FooterComponent,
   
    FechasComponent,
   
    DiasComponent,
   
    CancelarComponent,
   
    PeriodoiniComponent,
   
    PeriodofinComponent,
   
    EnviarComponent,
   
    PrincipalsolicitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     //<---
    ReactiveFormsModule,  //<---
    FormsModule           //<--- 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
