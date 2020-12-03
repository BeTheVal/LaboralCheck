import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  employee:Employee;
  constructor( private activatedRoute:ActivatedRoute, private router:Router, private service:EmployeesService) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.employee = this.service.getEmployee(+id)
    }
   }

  ngOnInit() {
  }
  getImage(id:number){
    return "../../../assets/img/"+id+".jpg"
  }

  addWorkedHours(e:Employee, h:number){
    e.timeworked += h;
    this.service.saveEmployee(e)
  }

  addSpendMinutes(e:Employee, h:number){
    e.timespend += h;
    this.service.saveEmployee(e)
  }

}
