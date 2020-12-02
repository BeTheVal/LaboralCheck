import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  employee:Employee={
    name:"",
    birthdate:"",
    job:"",
    salary:0
  };
  constructor(private service:EmployeesService, private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.employee = this.service.getEmployee(+id)
    }
  }
  saveEmployee(){
    this.service.saveEmployee(this.employee);
    this.router.navigateByUrl("/listaempleados")
    
  }
 


}
