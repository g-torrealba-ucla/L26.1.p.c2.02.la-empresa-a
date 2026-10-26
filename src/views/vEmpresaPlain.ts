import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaPlain implements iEmpresa {
  private btNuevoEmpleado: HTMLButtonElement;
  private lblNombreMayorAumento: HTMLElement;
  private lblTotalNominaNueva: HTMLElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblNombreMayorAumento = document.getElementById("body_lblNombreMayorAumento") as HTMLElement;
    this.lblTotalNominaNueva = document.getElementById("body_lblTotalNominaNueva") as HTMLElement;
  }

  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }

  reportar({
    nombreMayorAumento,
    totalNominaNueva,
  }: {
    nombreMayorAumento: string;
    totalNominaNueva: number;
  }): void {
    this.lblNombreMayorAumento.innerHTML = nombreMayorAumento;
    this.lblTotalNominaNueva.innerHTML = `${totalNominaNueva}`;
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
