import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { EnterpriseService } from '../../../services/enterprise.service';

@Component({
  selector: 'app-create-enterprise',
  templateUrl: './create-enterprise.component.html',
  styleUrls: ['./create-enterprise.component.css']
})
export class CreateEnterpriseComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private enterpriseService: EnterpriseService) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      created_by: ['', Validators.required],
      created_date: [''],
      modified_by: [''],
      modified_date: [''],
      status: [true],
      address: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  get f(){
    return this.form.controls;
  }
  submit() {
    this.enterpriseService.createEnterprise(this.form.value)
      .subscribe( data => {
        this.router.navigate(['enterprise']);
      });
  }
}
