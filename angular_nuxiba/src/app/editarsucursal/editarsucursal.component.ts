import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';				//<--

import { SucursalesService } from '../services/sucursales.service';	//<---
import { Sucursal } from '../interfaces/Sucursal';
 
@Component({
  selector: 'app-editarsucursal',
  templateUrl: './editarsucursal.component.html',
  styleUrls: ['./editarsucursal.component.css']
})
export class EditarsucursalComponent implements OnInit {

 sucursal: Sucursal = {
				 
				nombre: null,
				calle: null,
				numint: null,
				numext: null,
				municipio: null,
				estado: null,
				cp: null,
				
				
			};

		

		id: any;
		editar: boolean = false;

  		constructor(private sucursalesService: SucursalesService, 
  			private activatedRoute: ActivatedRoute ) { 
  				this.id = this.activatedRoute.snapshot.params['id'];
  				//console.log(this.id);

  				if(this.id){
  						this.editar = true;
  						this.sucursalesService.get().subscribe(
				  				(data:Sucursal[])=>{
				  					//this.sucursales = data;
				  					//console.log(data);
				  					this.sucursal = data.find((search => { 
				  						return search.id == this.id }));
				  						console.log(this.sucursal);
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

  		editarSucursal() { 
	  			//console.log(this.sucursal);
	  			this.sucursalesService.put(this.sucursal).subscribe(
	  				(data)=>{
	  					alert('Sucursal: datos editado.');
	  					console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: editar!!!');
	  				});
	  		}

		ngOnInit() { }

	}
