import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


import { EditarempleadoComponent } from './editarempleado/editarempleado.component';
import { ReporteempleadoComponent } from './reporteempleado/reporteempleado.component';
import { AltaempleadoComponent } from './altaempleado/altaempleado.component'; //-----------------

import { EditarsucursalComponent } from './editarsucursal/editarsucursal.component';
import { ReportesucursalComponent } from './reportesucursal/reportesucursal.component';
import { AltasucursalComponent } from './altasucursal/altasucursal.component'; //-----------------

import { AltaareaComponent } from './areas/altaarea/altaarea.component';

import { PrincipalsolicitarComponent } from './solicitar/principalsolicitar/principalsolicitar.component';

import { PrincipalloginComponent } from './login/principallogin/principallogin.component';


const routes: Routes = [
		{path: '', component: InicioComponent},
		{path: 'inicio', component: InicioComponent},
	//----------------------------------------

		{path: 'empleados', component: ReporteempleadoComponent},
		{path: 'altaempleado', component: AltaempleadoComponent},
		{path: 'editarempleado', component: EditarempleadoComponent},
		{path: 'editarempleado/:id', component: EditarempleadoComponent},//-----------------------

		{path: 'sucursales', component: ReportesucursalComponent},
		{path: 'altasucursal', component: AltasucursalComponent},
		{path: 'editarsucursal', component: EditarsucursalComponent},
		{path: 'editarsucursal/:id', component: EditarsucursalComponent},//-----------------------

		{path: 'altaarea', component: AltaareaComponent},
		{path: 'principalsolicitar', component: PrincipalsolicitarComponent},

		{path: 'principallogin', component: PrincipalloginComponent}
		  
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
