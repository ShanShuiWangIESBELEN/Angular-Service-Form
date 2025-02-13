import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { EmployeesComponent } from './components/employees/employees.component';

export const routes: Routes = [
    { path: '', component: EmployeesComponent },  // Página principal con empleados
    { path: 'list', component: ListComponent },  // Página de lista de eventos
    { path: 'form', component: FormComponent }   // Página del formulario
];
