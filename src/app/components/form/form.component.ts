import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;

  constructor(private loggerService: LoggerService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(5)]], 
      type: ['log', Validators.required]
    });
  }
  submitForm() {
    if (this.form.valid) {
      const { message, type } = this.form.value;
      if (type === 'log') {
        this.loggerService.log(message);
      } else if (type === 'warn') {
        this.loggerService.warn(message);
      } else if (type === 'error') {
        this.loggerService.error(message);
      }
      this.form.reset({
        type: 'log'
      });
    }

  }
}
