export interface iEmpleado {
  get nombre(): string;
  get cedula(): number;
  get sueldoActual(): number;
  get aniosTrabajando(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
