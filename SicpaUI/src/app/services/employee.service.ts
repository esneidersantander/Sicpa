import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "Employee";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  public getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
  }

  
  public createEmployee(employee: Employee) : Observable<Employee> {
    return this.http.post<Employee>(`${environment.apiUrl}/${this.url}`, JSON.stringify(employee), this.httpOptions);
  }

  
  public findEmployee(id:number): Observable<Employee> {
    return this.http.get(`${environment.apiUrl}/${this.url}/${id}`);
  }
  
  public updateEmployee(id:number, employee:Employee): Observable<Employee> {  
    return this.http.put(`${environment.apiUrl}/${this.url}`, JSON.stringify(employee), this.httpOptions);
  }
}
