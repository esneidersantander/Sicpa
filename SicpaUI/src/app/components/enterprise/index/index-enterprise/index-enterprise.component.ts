import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Enterprise } from '../../../../models/enterprise';
import { EnterpriseService } from '../../../../services/enterprise.service';

@Component({
  selector: 'app-index-enterprise',
  templateUrl: './index-enterprise.component.html',
  styleUrls: ['./index-enterprise.component.css']
})
export class IndexEnterpriseComponent implements OnInit {

  enterprises: Enterprise[]=[];
  constructor(private router: Router, private enterpriseService: EnterpriseService){}
  ngOnInit(): void {
    this.enterpriseService.getEnterprises().subscribe((result:Enterprise[]) => (this.enterprises = result));
  }
  addEnterprise(): void {
    this.router.navigate(['enterprise/create-enterprise']);
  };
}
