import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { Photo, PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.page.html',
  styleUrls: ['./listaempleados.page.scss'],
})
export class ListaempleadosPage implements OnInit {

  employees:Employee[];
  photos:Photo[]
  constructor(private service:EmployeesService, private router:Router, private alertController: AlertController, public photoService:PhotoService) { }

  ngOnInit() {
    this.employees = this.service.getEmployees();
    this.photos = this.photoService.getPhotos();
  
  }

  toAddEmployee():void{
    this.router.navigateByUrl("/new")

  }

  toEditEmployee(id:number):void{
    this.router.navigateByUrl("/edit/"+id);

  }
  deleteEmployee(id: number) {
    this.service.deleteEmployee(id);
  }

  async alertToDelete(e: Employee) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Deseas eliminar a <strong> ${e.name}</strong> de tus empleados?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteEmployee(e.id);
          }
        }
      ]
    });
  
    await alert.present();
  }


}