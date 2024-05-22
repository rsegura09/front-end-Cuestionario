export interface ICuestionario {
  idCuestionario: number;
  idPersona: number | null;
  titulo: string | undefined| null;
  descripcion: string | null | undefined;
  fechaDeCreacion: Date | null;
  fechaDeEjecucion: string | null;
}
