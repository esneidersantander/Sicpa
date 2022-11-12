import { Department } from './../models/department';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Enterprise } from '../models/enterprise';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = "Department";
  urlEnterprise = "Enterprise";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  public getDepartments() : Observable<Department[]> {
    return this.http.get<Department[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getEnterprises() : Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${environment.apiUrl}/${this.urlEnterprise}`);
  }
  public createDepartment(department: Department) : Observable<Department> {
    return this.http.post<Department>(`${environment.apiUrl}/${this.url}`, JSON.stringify(department), this.httpOptions);
  }

  public findDepartment(id:number): Observable<Department> {
    return this.http.get(`${environment.apiUrl}/${this.url}/${id}`);
  }
  public updateDepartment(id:number, department:Department): Observable<Department> {  
    return this.http.put(`${environment.apiUrl}/${this.url}`, JSON.stringify(department), this.httpOptions);
  }
  
}
