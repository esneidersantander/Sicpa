import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { Enterprise } from '../../../models/enterprise';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  form!: FormGroup;
  enterprises: Enterprise[]=[];
  constructor(private formBuilder: FormBuilder,private router: Router, private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departmentService.getEnterprises().subscribe((result:Enterprise[]) => (this.enterprises = result));
    this.form = this.formBuilder.group({
      id: [],
      created_by: ['', Validators.required],
      created_date: [''],
      modified_by: [''],
      modified_date: [''],
      status: [true],
      id_enterprise: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  get f(){
    return this.form.controls;
  }
  submit() {
    this.departmentService.createDepartment(this.form.value)
      .subscribe( data => {
        this.router.navigate(['department']);
      });
  }

}
