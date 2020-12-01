import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees:Employee[];
  idCount:number;
  constructor() { this.getEmployeesFromStorage().then(
    data => this.employees = data
  );

  }


  //Local Storage
  public async getEmployeesFromStorage(): Promise<Employee[]> {
    const ret = await Storage.get({ key: 'employees' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }


  public async saveEmployees(employees: Employee[]) {
    await Storage.set({
      key: 'employees',
      value: JSON.stringify(employees)
    });
  }
  public async deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id != id);
    await this.saveEmployees(this.employees);
  }
  //

  //Service

  public getEmployees(){
    return this.employees;
  }
  public getEmployee(id:number){
    return {...this.employees.filter(e => e.id === id)[0]}
  }
}
