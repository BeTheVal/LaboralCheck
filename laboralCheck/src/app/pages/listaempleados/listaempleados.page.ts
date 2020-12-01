import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.page.html',
  styleUrls: ['./listaempleados.page.scss'],
})
export class ListaempleadosPage implements OnInit {

  employees:Employee[];
  constructor(private service:EmployeesService, private router:Router) { }

  ngOnInit() {
    this.employees = this.service.getEmployees();
  
  }

  toAddEmployee():void{
    this.router.navigateByUrl("/new")

  }

  toEditEmployee(id:number):void{
    this.router.navigateByUrl("/edit/"+id);

  }


}