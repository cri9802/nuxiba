import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Sucursal } from '../interfaces/sucursal';

@Injectable({
  providedIn: 'root' 
})
export class SucursalesService {
API_ENDPOINT = 'http://localhost:8888/laravel_nuxiba/public/api';

		constructor(private httpClient: HttpClient) { }

		get(){
				return this.httpClient.get(this.API_ENDPOINT + '/sucursales');
			}

		save(sucursal: Sucursal) {
				/*  --- En caso de error 
					const headers = new HttpHeaders(headers:{'Content-Type': 'application/json'});
					return this.httpClient.post(url:this.API_ENDPOINT + '/sucursales', sucursal, options:{headers: headers});
				*/
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.post(this.API_ENDPOINT + '/sucursales', sucursal, {headers: headers});
			}

		put(sucursal) {
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.put(this.API_ENDPOINT + '/sucursales/' + sucursal.id, sucursal, {headers: headers});
			}

		borrar(id) {
				return this.httpClient.delete(this.API_ENDPOINT + '/sucursales/' + id);
			}

	}

