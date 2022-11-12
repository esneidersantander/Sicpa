import { IndexEnterpriseComponent } from './components/enterprise/index/index-enterprise/index-enterprise.component';
import { CreateEnterpriseComponent } from './components/enterprise/create-enterprise/create-enterprise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EditEnterpriseComponent } from './components/enterprise/edit-enterprise/edit-enterprise.component';
import { IndexEmployeeComponent } from './components/employee/index-employee/index-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { IndexDepartmentComponent } from './components/department/index-department/index-department.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { IndexDepartmentEmployeeComponent } from './components/department-employee/index-department-employee/index-department-employee.component';
import { CreateDepartmentEmployeeComponent } from './components/department-employee/create-department-employee/create-department-employee.component';


const routes: Routes = [
  { path: 'enterprise', component: IndexEnterpriseComponent },
  { path: 'enterprise/create-enterprise', component: CreateEnterpriseComponent },
  { path: 'enterprise/edit-enterprise/:enterpriseId', component: EditEnterpriseComponent },
  { path: 'employee', component: IndexEmployeeComponent },
  { path: 'employee/create-employee', component: CreateEmployeeComponent },
  { path: 'employee/edit-employee/:employeeId', component: EditEmployeeComponent },
  { path: 'department', component: IndexDepartmentComponent },
  { path: 'department/create-department', component: CreateDepartmentComponent },
  { path: 'department/edit-department/:departmentId', component: EditDepartmentComponent },
  { path: 'department-employee', component: IndexDepartmentEmployeeComponent },
  { path: 'department-employee/create-department-employee', component: CreateDepartmentEmployeeComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
