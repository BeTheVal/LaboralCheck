import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { PhotoService } from 'src/app/services/photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  employee:Employee={
    name:"",
    birthdate:"",
    job:"",
    salary:0
  };
  constructor(private service:EmployeesService , private router:Router, public photoService:PhotoService) { }

  async ngOnInit() {
    defineCustomElements(window)
    await this.photoService.loadSaved();

  }

  saveEmployee(){
    this.service.saveEmployee(this.employee);
    this.router.navigateByUrl("/listaempleados")
    
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  



}
