import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Fruit } from 'src/app/fruit';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FruitService {  

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getFruit() : Observable<Fruit> {    
    let url = this.baseUrl + '/fruits/1.json';
    return this.httpClient.get<Fruit>(url);        
  }  
}
