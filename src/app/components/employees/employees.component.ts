import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf]
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
    try {
      this.listEmpleados = await this.empleadoService.getEmpleados();
      console.log("Empleados cargados:", this.listEmpleados);
    } catch (error) {
      console.error("Error al cargar empleados:", error);
    }
  }


  submit() {
    const selectedEmployee = this.employeeForm.get('username')?.value;
    if (selectedEmployee) {
      localStorage.setItem('selectedEmployee', selectedEmployee);
      console.log(`Empleado seleccionado: ${selectedEmployee}`);
    }
  }
}
