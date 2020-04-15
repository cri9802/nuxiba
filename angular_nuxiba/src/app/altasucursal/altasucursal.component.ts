import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SucursalesService } from '../services/sucursales.service';	//<---
import { Sucursal } from '../interfaces/Sucursal';

@Component({
  selector: 'app-altasucursal',
  templateUrl: './altasucursal.component.html',
  styleUrls: ['./altasucursal.component.css'] 
})
export class AltasucursalComponent implements OnInit {
sucursal: Sucursal = { 
				 
				nombre: null,
				calle: null,
				numint: null,
				numext: null,
				municipio: null,
				estado: null,
				cp: null,
				
				
			};
		
	  	constructor(private sucursalesService: SucursalesService) { }

	  	ngOnInit() { }

	  	salvarSucursal() { 
	  			//console.log(this.sucursal);
	  			this.sucursalesService.save(this.sucursal).subscribe(
	  				(data)=>{
	  					alert('Sucursal: Alta correcta.');
	  					console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: Alta!!!');
	  				});
	  		}

	}
