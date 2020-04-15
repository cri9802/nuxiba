import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 	//<---

import { Empleado } from '../interfaces/empleado';
 
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

 API_ENDPOINT = 'http://localhost:8888/laravel_nuxiba/public/api';

		constructor(private httpClient: HttpClient) { }

		get(){
				return this.httpClient.get(this.API_ENDPOINT + '/empleados');
			}

		save(empleado: Empleado) {
				/*  --- En caso de error 
					const headers = new HttpHeaders(headers:{'Content-Type': 'application/json'});
					return this.httpClient.post(url:this.API_ENDPOINT + '/empleados', empleado, options:{headers: headers});
				*/
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.post(this.API_ENDPOINT + '/empleados', empleado, {headers: headers});
			}

		put(empleado) {
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.put(this.API_ENDPOINT + '/empleados/' + empleado.id, empleado, {headers: headers});
			}

		borrar(id) {
				return this.httpClient.delete(this.API_ENDPOINT + '/empleados/' + id);
			}

	}

