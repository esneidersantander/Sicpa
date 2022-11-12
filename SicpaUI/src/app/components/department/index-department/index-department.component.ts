import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-index-department',
  templateUrl: './index-department.component.html',
  styleUrls: ['./index-department.component.css']
})
export class IndexDepartmentComponent implements OnInit {
  departments: Department[]=[];
  constructor(private router: Router, private departmentService: DepartmentService){}
  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((result:Department[]) => (this.departments = result));
  }
  addDepartment(): void {
    this.router.navigate(['department/create-department']);
  };

}
