import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DepartmentEmployee, Employee, Department } from '../models/department-employee';
import { DepartmentEmployeeTable } from '../models/department-employee-table';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentEmployeeService {

  url = "DepartmentEmployee";
  urlDepartment = "Department";
  urlEmployee = "Employee";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  
  public getDepartmentEmployees() : Observable<DepartmentEmployeeTable[]> {
    return this.http.get<DepartmentEmployee[]>(`${environment.apiUrl}/${this.url}`)
      .pipe(
        map((res)=> res.map((r)=>({
          created_by: r.created_by,
          created_date: r.created_date,
          department: r.department.name,
          employee: r.employee.name
          }))
        ),
      );
  }
  public createDepartmentEmployee(department: DepartmentEmployee) : Observable<DepartmentEmployee> {
    return this.http.post<DepartmentEmployee>(`${environment.apiUrl}/${this.url}`, JSON.stringify(department), this.httpOptions);
  }
  public getDepartments() : Observable<Department[]> {
    return this.http.get<Department[]>(`${environment.apiUrl}/${this.urlDepartment}`);
  }
  public getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.urlEmployee}`);
  }
}
