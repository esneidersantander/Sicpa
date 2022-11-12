import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentEmployee, Employee, Department } from '../../../models/department-employee';
import { Router } from '@angular/router';
import { DepartmentEmployeeService } from '../../../services/department-employee.service';

@Component({
  selector: 'app-create-department-employee',
  templateUrl: './create-department-employee.component.html',
  styleUrls: ['./create-department-employee.component.css']
})
export class CreateDepartmentEmployeeComponent implements OnInit {

  form!: FormGroup;
  departmentEnterprises: DepartmentEmployee[]=[];
  departments: Department[]=[];
  employees: Employee[]=[];
  constructor(private formBuilder: FormBuilder,private router: Router, private departmentEmployeeService: DepartmentEmployeeService) {}

  ngOnInit() {
    this.departmentEmployeeService.getDepartments().subscribe((result:Department[]) => (this.departments = result));
    this.departmentEmployeeService.getEmployees().subscribe((result:Employee[]) => (this.employees = result));
    this.form = this.formBuilder.group({
      id: [],
      created_by: ['', Validators.required],
      created_date: [''],
      modified_by: [''],
      modified_date: [''],
      status: [true],
      id_department: ['', Validators.required],
      id_employee: ['', Validators.required]
    });
  }
  get f(){
    return this.form.controls;
  }
  submit() {
    this.departmentEmployeeService.createDepartmentEmployee(this.form.value)
      .subscribe( data => {
        this.router.navigate(['department-employee']);
      });
  }
}
