export interface iEmpresa {
  onNuevoEmpleado(callback: () => void): void;
  reportar({
    nombreMayorAumento,
    totalNominaNueva,
  }: {
    nombreMayorAumento: string;
    totalNominaNueva: number;
  }): void;
}
