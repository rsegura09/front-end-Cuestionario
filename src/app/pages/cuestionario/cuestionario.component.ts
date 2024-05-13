import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.scss',
})
export class CuestionarioComponent {
  cuestionarioForm = this.formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    fechaDeEjecucion: ['', Validators.required],
    horaDeEjecucion: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  enviar() {
    console.warn(this.cuestionarioForm.value.titulo);
  }
}
