import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; //<------------------------------------------------

import { EmpleadosService } from '../services/empleados.service';	//<---
import { Empleado } from '../interfaces/Empleado';	//<------------

@Component({
  selector: 'app-reporteempleado',
  templateUrl: './reporteempleado.component.html',
  styleUrls: ['./reporteempleado.component.css']
})
export class ReporteempleadoComponent implements OnInit {
 
  empleados: Empleado[];

		constructor(private empleadosService: EmpleadosService) { 
				this.reporteempleado();
			}

		reporteempleado() {
				this.empleadosService.get().subscribe(
	  				(data:Empleado[])=>{
	  					this.empleados = data;
	  					//console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: Mostrar!!!');
	  				});
			}

		borrarempleado(id) {
				if(confirm('Realmente desea borrar el registro?')){
					this.empleadosService.borrar(id).subscribe(
		  				(data)=>{
		  					alert('Registro Borrado con Exito!!!');
		  						console.log(data);
		  					this.reporteempleado();
		  				},
		  				(error)=>{
		  					console.log(error);
		  					alert('Error: Mostrar!!!');
		  				});
				}
			}

  		ngOnInit() {}

	}
