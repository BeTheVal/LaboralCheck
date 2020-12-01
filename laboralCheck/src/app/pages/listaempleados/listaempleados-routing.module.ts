import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaempleadosPage } from './listaempleados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaempleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaempleadosPageRoutingModule {}
