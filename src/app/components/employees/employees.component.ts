import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class EmployeesComponent implements OnInit {
  listEmpleados: Empleado[] = [];
  employeeForm: FormGroup;

  constructor(private empleadoService: EmpleadoService) {
    this.employeeForm = new FormGroup({
      username: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.loadEmpleados();
    const storedEmployee = localStorage.getItem('selectedEmployee');
    if (storedEmployee) {
      this.employeeForm.get('username')?.setValue(storedEmployee);
    }
  }

  async loadEmpleados() {
    this.listEmpleados = await this.empleadoService.getAllEmpleados();
  }

  submit() {
    const selectedEmployee = this.employeeForm.get('username')?.value;
    if (selectedEmployee) {
      localStorage.setItem('selectedEmployee', selectedEmployee);
      console.log(`Empleado seleccionado: ${selectedEmployee}`);
    }
  }
}
