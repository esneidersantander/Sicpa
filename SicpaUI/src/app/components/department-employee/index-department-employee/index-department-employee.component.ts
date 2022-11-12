import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentEmployeeService } from 'src/app/services/department-employee.service';
import { DepartmentEmployeeTable } from '../../../models/department-employee-table';

@Component({
  selector: 'app-index-department-employee',
  templateUrl: './index-department-employee.component.html',
  styleUrls: ['./index-department-employee.component.css']
})
export class IndexDepartmentEmployeeComponent implements OnInit {

  departmentEmployeesTable: DepartmentEmployeeTable[]=[];
  constructor(private router: Router, private departmentemployeeService: DepartmentEmployeeService){}

  ngOnInit(): void {
    this.departmentemployeeService.getDepartmentEmployees().subscribe((data)=>{this.departmentEmployeesTable = data})
  }
  addDepartmentEmployee(): void {
    this.router.navigate(['department-employee/create-department-employee']);
  };

}
