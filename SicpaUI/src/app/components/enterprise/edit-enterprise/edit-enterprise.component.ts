import { Component, Input, OnInit } from '@angular/core';
import { Enterprise } from '../../../models/enterprise';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnterpriseService } from '../../../services/enterprise.service';

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.component.html',
  styleUrls: ['./edit-enterprise.component.css']
})
export class EditEnterpriseComponent implements OnInit {
  id!: number;
  enterprise!: Enterprise;
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private enterpriseService: EnterpriseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['enterpriseId'];
    this.enterpriseService.find(this.id).subscribe((data: Enterprise)=>{
      this.enterprise = data;
    }); 
      
    this.form = this.formBuilder.group({
      id: [Validators.required],
      created_by: [''],
      created_date: [''],
      modified_by: ['', Validators.required],
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
  submit(){
    console.log(this.form.value);
    this.enterpriseService.update(this.id, this.form.value).subscribe((res:any) => {
        console.log('Enterprise updated successfully!');
        this.router.navigateByUrl('enterprise');
    })
  }

}
