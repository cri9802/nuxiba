import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
API_ENDPOINT = 'http://localhost:8888/laravel_nuxiba/public/api';

		constructor(private httpClient: HttpClient) { }

		get(){
				return this.httpClient.get(this.API_ENDPOINT + '/usuarios');
			}

		save(usuario: Usuario) { 
				
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.post(this.API_ENDPOINT + '/usuarios', usuario, {headers: headers});
			}

		put(usuario) {
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.put(this.API_ENDPOINT + '/usuarios/' + usuario.id, usuario, {headers: headers});
			}

		borrar(id) {
				return this.httpClient.delete(this.API_ENDPOINT + '/usuarios/' + id);
			}

	}

