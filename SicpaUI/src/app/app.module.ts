import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexEnterpriseComponent } from './components/enterprise/index/index-enterprise/index-enterprise.component';
import { EditEnterpriseComponent } from './components/enterprise/edit-enterprise/edit-enterprise.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateEnterpriseComponent } from './components/enterprise/create-enterprise/create-enterprise.component';
import { IndexEmployeeComponent } from './components/employee/index-employee/index-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { IndexDepartmentComponent } from './components/department/index-department/index-department.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { IndexDepartmentEmployeeComponent } from './components/department-employee/index-department-employee/index-department-employee.component';
import { CreateDepartmentEmployeeComponent } from './components/department-employee/create-department-employee/create-department-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexEnterpriseComponent,
    EditEnterpriseComponent,
    CreateEnterpriseComponent,
    IndexEmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    IndexDepartmentComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent,
    IndexDepartmentEmployeeComponent,
    CreateDepartmentEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
