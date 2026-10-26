import mEmpleado from "./mEmpleado.js";

export default class mEmpresa {
  private acumNominaNueva: number = 0;
  private maxAumento: number = 0;
  private nombreMaxAumento: string = "";

  constructor() {
    this.acumNominaNueva = 0;
    this.maxAumento = 0;
    this.nombreMaxAumento = "";
  }

  procesarEmpleado(e: mEmpleado): void {
    this.acumNominaNueva += e.nuevoSueldo();
    if (e.aumento() > this.maxAumento) {
      this.maxAumento = e.aumento();
      this.nombreMaxAumento = e.nombre;
    }
  }

  nombreMayorAumento(): string {
    return this.nombreMaxAumento;
  }

  totalNominaNueva(): number {
    return this.acumNominaNueva;
  }
}
