import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-index-employee',
  templateUrl: './index-employee.component.html',
  styleUrls: ['./index-employee.component.css']
})
export class IndexEmployeeComponent implements OnInit {

  employees: Employee[]=[];
  constructor(private router: Router, private employeeService: EmployeeService){}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result:Employee[]) => (this.employees = result));
  }
  addEmployee(): void {
    this.router.navigate(['employee/create-employee']);
  };
}
