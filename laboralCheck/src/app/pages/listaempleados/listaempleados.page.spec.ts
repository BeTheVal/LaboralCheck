import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaempleadosPage } from './listaempleados.page';

describe('ListaempleadosPage', () => {
  let component: ListaempleadosPage;
  let fixture: ComponentFixture<ListaempleadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaempleadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaempleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
