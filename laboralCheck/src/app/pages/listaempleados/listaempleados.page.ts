import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { Photo, PhotoService } from 'src/app/services/photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { InfoPage } from '../info/info.page';

@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.page.html',
  styleUrls: ['./listaempleados.page.scss'],
})
export class ListaempleadosPage implements OnInit {

  employees:Employee[];
  photos:Photo[]
  constructor(private service:EmployeesService, private router:Router, private alertController: AlertController, public modalController:ModalController ,public photoService:PhotoService) { }

  ngOnInit() {
    defineCustomElements(window)
    this.employees = this.service.getEmployees();
    this.photos = this.photoService.getPhotos();
  
  }

  toAddEmployee():void{
    this.router.navigateByUrl("/new")

  }

  toEditEmployee(id:number):void{
    this.router.navigateByUrl("/edit/"+id);
  }
  toInfo(id:number){
    this.router.navigateByUrl("/info/"+id);

  }
  deleteEmployee(id: number) {
    this.service.deleteEmployee(id);
  }

  getImage(id:number){
    return "../../../assets/img/"+id+".jpg"
  }

  async alertToDelete(e: Employee) {
    const alert = await this.alertController.create({
      header: 'Eliminar empleado',
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

  public clickOnEmployee(id:String) {
    this.router.navigateByUrl("info/"+id);
  }

  

}
  