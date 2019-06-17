import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetNbEntityService {

  constructor(private httpClient: HttpClient) { }

  getNbEntity(urlApi: string): Promise<any> {
	return this.httpClient.get(`${urlApi}`).toPromise()
	.then(res => {
	  return res;
	}).catch(error => {
	  return Promise.reject(error);
	});
  }
}
