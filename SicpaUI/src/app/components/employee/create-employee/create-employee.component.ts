import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      created_by: ['', Validators.required],
      created_date: [''],
      modified_by: [''],
      modified_date: [''],
      status: [true],
      age: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    this.employeeService.createEmployee(this.form.value)
      .subscribe( data => {
        this.router.navigate(['employee']);
      });
  }
}
