import { Routes } from '@angular/router';
import { CrearcuestionarioComponent } from './pages/crearcuestionario/crearcuestionario.component';
import { Component } from '@angular/core';
import { CuestionarioComponent } from './pages/cuestionario/cuestionario.component';

export const routes: Routes = [
  {path: 'crearcuestionario', component: CrearcuestionarioComponent},
  {path: 'cuestionario', component: CuestionarioComponent}
];
