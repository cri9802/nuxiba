import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmpleadosService } from '../services/empleados.service';	//<---
import { Empleado } from '../interfaces/Empleado';	
 
@Component({
  selector: 'app-altaempleado',
  templateUrl: './altaempleado.component.html',
  styleUrls: ['./altaempleado.component.css']
})
export class AltaempleadoComponent implements OnInit {
empleado: Empleado = {
				
				correo: null,
				pass: null,
				nombre: null,
				app: null,
				apm: null,
				status: null,  //string
				
			};
		
	  	constructor(private empleadosService: EmpleadosService) { }

	  	ngOnInit() { }

	  	salvarEmpleado() { 
	  			//console.log(this.empleado);
	  			this.empleadosService.save(this.empleado).subscribe(
	  				(data)=>{
	  					alert('Empleado: Alta correcta.');
	  					console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: Alta!!!');
	  				});
	  		}

	}
