import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: Employee[] = [];
  idCounter: number = 0;

  constructor() {
    this.getEmployeesFromStorage().then(
      data => this.employees = data
    );

    this.getEmployeeCounterFromStorage().then(
      data => this.idCounter = data
    );
  }

  public getEmployees(){
    return this.employees;
  }

  public async getEmployeesFromStorage(): Promise<Employee[]> {
    const ret = await Storage.get({ key: 'employees' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }

  public async getEmployeeCounterFromStorage(): Promise<number> {
    const { value } = await Storage.get({ key: 'idCounter' });
    return value ? +value : 0;
  }

  public getEmployee(id: number) {
    return { ...this.employees.filter(t => t.id === id)[0] };
  }

  public async saveEmployee(t: Employee) {

    if (t.id == undefined) { // tarea nueva
      t.id = this.idCounter++;
      this.employees.push(t);
    } else { // edición de una tarea existente
      this.employees = this.employees.filter(ta => ta.id != t.id);
      this.employees.push(t);
    }

    await this.saveEmployees(this.employees);
    await this.saveEmployeeCounter(this.idCounter);
  }

  public async saveEmployees(employees: Employee[]) {
    await Storage.set({
      key: 'employees',
      value: JSON.stringify(employees)
    });
  }

  public async saveEmployeeCounter(tc: number) {
    await Storage.set({
      key: 'idCounter',
      value: '' + tc
    });
  }

  public async deleteEmployee(id: number) {
    this.employees = this.employees.filter(t => t.id != id);
    await this.saveEmployees(this.employees);
  }
}
