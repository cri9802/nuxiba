import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; //<------------------------------------------------

import { SucursalesService } from '../services/sucursales.service';	//<---
import { Sucursal } from '../interfaces/Sucursal';	//<------------
  
@Component({
  selector: 'app-reportesucursal',
  templateUrl: './reportesucursal.component.html',
  styleUrls: ['./reportesucursal.component.css']
})
export class ReportesucursalComponent implements OnInit {

  sucursales: Sucursal[]; 

		constructor(private sucursalesService: SucursalesService) { 
				this.reportesucursal();
			}

		reportesucursal() {
				this.sucursalesService.get().subscribe(
	  				(data:Sucursal[])=>{
	  					this.sucursales = data;
	  					//console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: Mostrar!!!');
	  				});
			}

		borrarsucursal(id) {
				if(confirm('Realmente desea borrar el registro?')){
					this.sucursalesService.borrar(id).subscribe(
		  				(data)=>{
		  					alert('Registro Borrado con Exito!!!');
		  						console.log(data);
		  					this.reportesucursal();
		  				},
		  				(error)=>{
		  					console.log(error);
		  					alert('Error: Mostrar!!!');
		  				});
				}
			}

  		ngOnInit() {}

	}
