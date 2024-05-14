import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICuestionario } from '../models/cuestionario.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCuestionarioService {
  private baseUrl = 'https://localhost:44362/api';

  constructor(private http: HttpClient) {}

  getAllCuestionario(): Observable<ICuestionario[]> {
    return this.http.get<ICuestionario[]>(`${this.baseUrl}/cuestionarios`);
  }

  getCuestionarioById(id: Number): Observable<ICuestionario> {
    return this.http.get<ICuestionario>(`${this.baseUrl}/cuestionarios/${id}`);
  }

  postCuestionario(cuestionario: ICuestionario): Observable<ICuestionario> {
    return this.http.post<ICuestionario>(
      `${this.baseUrl}/cuestionarios`,
      cuestionario
    );
  }

  deleteCuestionarioById(id: Number | string): Observable <ICuestionario>{
    return this.http.delete<ICuestionario>(`${this.baseUrl}/cuestionarios/${id}`)
  }
}
