import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id!: number;
  employee!: Employee;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];
    this.employeeService.findEmployee(this.id).subscribe((data: Employee)=>{
      this.employee = data;
    }); 
      
    this.form = this.formBuilder.group({
      id: [],
      created_by: [''],
      created_date: [''],
      modified_by: ['', Validators.required],
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



  submit(){
    console.log(this.form.value);
    this.employeeService.updateEmployee(this.id, this.form.value).subscribe((res:any) => {
        this.router.navigateByUrl('employee');
    })
  }
}
