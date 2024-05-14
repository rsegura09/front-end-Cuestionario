import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiCuestionarioService } from '../../service/api-cuestionario.service';
import { ICuestionario } from '../../models/cuestionario.model';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.scss',
})
export class CuestionarioComponent implements OnInit {

  cuestionarioLista: ICuestionario[] = [];

  cuestionarioForm = this.formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    fechaDeEjecucion: ['', Validators.required],
    horaDeEjecucion: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private _apiCuestionario: ApiCuestionarioService
  ) {}

  ngOnInit(): void {
    this.getCuestionarios();
  }

  getCuestionarios() {
    this._apiCuestionario.getAllCuestionario().subscribe({
      next: (result) => {
        this.cuestionarioLista = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  enviar() {
    console.warn(this.cuestionarioForm.value.titulo);
  }

  listarCuestionarios() {
    console.log(this.cuestionarioLista);
  }
}
