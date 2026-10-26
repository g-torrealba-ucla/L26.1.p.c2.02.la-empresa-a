import { iEmpleado } from "../interfaces/iEmpleado.js";
import mEmpleado from "../models/mEmpleado.js";

export default class cEmpleado {
  private vista: iEmpleado;
  private callback!: (empleado: mEmpleado | null) => void;

  constructor(vista: iEmpleado) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarEmpleado(callback: (empleado: mEmpleado | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    this.callback(
      new mEmpleado({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        sueldoActual: this.vista.sueldoActual,
        aniosTrabajando: this.vista.aniosTrabajando,
      }),
    );
    this.vista.ocultar();
  }
}
