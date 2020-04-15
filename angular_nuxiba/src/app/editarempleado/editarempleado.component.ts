import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';				//<--

import { EmpleadosService } from '../services/empleados.service';	//<---
import { Empleado } from '../interfaces/Empleado';	

@Component({
  selector: 'app-editarempleado',
  templateUrl: './editarempleado.component.html',
  styleUrls: ['./editarempleado.component.css']
})
export class EditarempleadoComponent implements OnInit {

  empleado: Empleado = {
				
				correo: null,
				pass: null,
				nombre: null,
				app: null, 
				apm: null,
				status: null,  //string
				
			};

		

		id: any;
		editar: boolean = false;

  		constructor(private empleadosService: EmpleadosService, 
  			private activatedRoute: ActivatedRoute ) { 
  				this.id = this.activatedRoute.snapshot.params['id'];
  				//console.log(this.id);

  				if(this.id){
  						this.editar = true;
  						this.empleadosService.get().subscribe(
				  				(data:Empleado[])=>{
				  					//this.empleados = data;
				  					//console.log(data);
				  					this.empleado = data.find((search => { 
				  						return search.id == this.id }));
				  						console.log(this.empleado);
				  				},
				  				(error)=>{
				  					console.log(error);
				  					alert('Error: id!!!');
			  				});
  					}
  				else{
  						this.editar = false;
  					}

  			}

  		editarEmpleado() { 
	  			//console.log(this.empleado);
	  			this.empleadosService.put(this.empleado).subscribe(
	  				(data)=>{
	  					alert('Empleado: datos editado.');
	  					console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: editar!!!');
	  				});
	  		}

		ngOnInit() { }

	}
