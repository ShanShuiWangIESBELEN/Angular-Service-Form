import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { LoggerService } from '../../services/logger.service';
import { Empleado } from '../../models/Empleado';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule, BsDatepickerModule],
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form: FormGroup;
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado | null = null;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private loggerService: LoggerService
  ) {
    this.form = this.fb.group({
      empleado: ['', Validators.required],
      cliente: ['', Validators.required],
      fechaEvento: ['', [Validators.required, this.validateFecha]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      type: ['log', Validators.required]
    });
/*     this.form.valueChanges.subscribe(() => localStorage.setItem("init", JSON.stringify(this.form.value)));

    if (localStorage.getItem("init")) {
      this.form.setValue(JSON.parse(localStorage.getItem("init") ?? "{}"))
    } */
  }

  async ngOnInit() {
    try {
      this.empleados = await this.empleadoService.getAllEmpleados();
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
    
    /* Metemos un localStorage aqui */
    this.GuardarData();
    this.form.valueChanges.subscribe(() => {
      this.saveFormData();
    });
  }


  onEmpleadoChange() {
    const empleadoId = this.form.value.empleado;
    this.selectedEmpleado = this.empleados.find(emp => emp.id === empleadoId) || null;

    if (this.selectedEmpleado) {
      localStorage.setItem('selectedEmpleado', JSON.stringify(this.selectedEmpleado));
    }
  }

  submitForm() {
    if (this.form.valid) {
      const newEvent = {
        ...this.form.value,
        fechaRegistro: new Date()
      };

      this.loggerService.addEvento(newEvent);
      alert('Evento registrado con éxito');
      this.form.reset();
    }
  }

  validateFecha(control: any) {
    const fechaSeleccionada = new Date(control.value);
    const hoy = new Date();
    const mesAnterior = new Date();
    mesAnterior.setMonth(hoy.getMonth() - 1);

    return fechaSeleccionada >= mesAnterior && fechaSeleccionada <= hoy ? null : { fechaInvalida: true };
  }

  /* funcion para guardar Dato */
  GuardarData() {
    const savedForm = localStorage.getItem('formData');
    if (savedForm) {
      const formData = JSON.parse(savedForm);
      this.form.setValue(formData);
    }
   /* 
      Verificar que todos los controles del formulario tengan valores
      Esto solo me guarda cuando todos los campos esta completado
    if (formData.empleado && formData.cliente && formData.fechaEvento && formData.message && formData.type) {
      this.form.setValue(formData);
    } else {
      console.warn('Datos de formulario incompletos en localStorage');
    }
  }
    */
  }
  saveFormData() {
    localStorage.setItem('formData', JSON.stringify(this.form.value));
  }
}