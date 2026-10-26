import { iEmpleado } from "../interfaces/iEmpleado.js";

export default class vEmpleadoPlain implements iEmpleado {
  private inNombre: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSueldoActual: HTMLInputElement;
  private inAniosTrabajando: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("empleado");
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inCedula = document.getElementById("empleado_inCedula") as HTMLInputElement;
    this.inSueldoActual = document.getElementById("empleado_inSueldoActual") as HTMLInputElement;
    this.inAniosTrabajando = document.getElementById("empleado_inAniosTrabajando") as HTMLInputElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return +this.inCedula.value;
  }
  get sueldoActual(): number {
    return +this.inSueldoActual.value;
  }
  get aniosTrabajando(): number {
    return +this.inAniosTrabajando.value;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista) {
      this.inNombre.value = "";
      this.inCedula.value = "";
      this.inSueldoActual.value = "";
      this.inAniosTrabajando.value = "";
      this.vista.hidden = false;
    }
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
