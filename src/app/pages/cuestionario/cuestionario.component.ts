import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiCuestionarioService } from '../../service/api-cuestionario.service';
import { ICuestionario } from '../../models/cuestionario.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.scss',
})
export class CuestionarioComponent implements OnInit {
  ID_PERSONA: number = 1;
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
        console.log(this.cuestionarioLista);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  enviarCuestionario(): void{
    const fecha = this.cuestionarioForm.value.fechaDeEjecucion+"T"+this.cuestionarioForm.value.horaDeEjecucion;
    const datos : ICuestionario ={
      idCuestionario: 0,
      idPersona: this.ID_PERSONA,
      titulo: this.cuestionarioForm.value.titulo,
      descripcion: this.cuestionarioForm.value.descripcion,
      fechaDeCreacion: new Date(fecha),
      fechaDeEjecucion: fecha
    }
    this.agregarCuestionario(datos)
    //this.cuestionarioForm.reset()

  }

  agregarCuestionario(cuestionario: ICuestionario) {
    this._apiCuestionario.postCuestionario(cuestionario).subscribe({
      next: (result) => {
        this.getCuestionarios();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  eliminarCuestionario(index: number) {
    this._apiCuestionario.deleteCuestionarioById(index).subscribe({
      next: (result) => {
        this.getCuestionarios();
        console.log(this.cuestionarioLista);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
