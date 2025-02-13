import { Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'lista', component: ListComponent },
    { path: 'formulario', component: FormComponent }
];
