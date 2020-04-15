import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Area } from '../interfaces/area';

@Injectable({ 
  providedIn: 'root'
})
export class AreasService {
  API_ENDPOINT = 'http://localhost:8888/laravel_nuxiba/public/api';
 
  constructor(private httpClient: HttpClient) { }

		get(){
				return this.httpClient.get(this.API_ENDPOINT + '/areas');
			}

		save(area: Area) {
				/*  --- En caso de error 
					const headers = new HttpHeaders(headers:{'Content-Type': 'application/json'});
					return this.httpClient.post(url:this.API_ENDPOINT + '/locales', local, options:{headers: headers});
				*/
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.post(this.API_ENDPOINT + '/areas', area, {headers: headers});
			}

		put(area) {
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.put(this.API_ENDPOINT + '/areas/' + area.id, area, {headers: headers});
			}

		borrar(id) {
				return this.httpClient.delete(this.API_ENDPOINT + '/areas/' + id);
			}

	}
