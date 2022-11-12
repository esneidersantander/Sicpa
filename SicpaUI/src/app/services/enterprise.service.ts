import { environment } from './../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Enterprise } from '../models/enterprise';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  url = "Enterprise";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  public getEnterprises() : Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${environment.apiUrl}/${this.url}`);
  }

  public createEnterprise(enterprise: Enterprise) : Observable<Enterprise> {
    return this.http.post<Enterprise>(`${environment.apiUrl}/${this.url}`, JSON.stringify(enterprise), this.httpOptions);
  }

  public find(id:number): Observable<Enterprise> {
    return this.http.get(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public update(id:number, enterprise:Enterprise): Observable<Enterprise> {  
    return this.http.put(`${environment.apiUrl}/${this.url}`, JSON.stringify(enterprise), this.httpOptions);
  }
  
}
