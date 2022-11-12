import { Component, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { Enterprise } from '../../../models/enterprise';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  id!: number;
  department!: Department;
  form!: FormGroup;
  enterprises: Enterprise[]=[];

  constructor(private formBuilder: FormBuilder, private departmentService: DepartmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['departmentId'];
    this.departmentService.getEnterprises().subscribe((result:Enterprise[]) => (this.enterprises = result));
    this.departmentService.findDepartment(this.id).subscribe((data: Department)=>{
      this.department = data;
    }); 
    this.form = this.formBuilder.group({
      id: [],
      created_by: [''],
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

  submit(){
    console.log(this.form.value);
    this.departmentService.updateDepartment(this.id, this.form.value).subscribe((res:any) => {
        this.router.navigateByUrl('department');
    });
  }

}
