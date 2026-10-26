/**
 * LA EMPRESA
 * Una empresa va a realizar un aumento de sueldo a sus empleados.
 * Se conoce de cada empleado: nombre, cedula, sueldo actual y años trabajados.
 * El sueldo se aumentará en un 10% si tiene menos de 5 años trabajados,
 * y en un 20% si tiene al menos 5 años trabajados.
 *
 * Se desea conocer:
 * - El nombre del empleado que recibirá el mayor aumento.
 * - El total de la nómina nueva.
 */

import mEmpresa from "../models/mEmpresa.js";
import { iEmpresa } from "../interfaces/iEmpresa.js";
import cEmpleado from "./cEmpleado.js";

export default class cEmpresa {
  private mEmpresa: mEmpresa = new mEmpresa();
  private vEmpresa: iEmpresa;
  private cEmpleado: cEmpleado;

  constructor(vistaEmpresa: iEmpresa, controladorEmpleado: cEmpleado) {
    this.vEmpresa = vistaEmpresa;
    this.cEmpleado = controladorEmpleado;

    this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
  }

  private procesar1Empleado(): void {
    this.cEmpleado.solicitarEmpleado((empleado) => {
      if (empleado !== null) {
        this.mEmpresa.procesarEmpleado(empleado);
        this.vEmpresa.reportar({
          nombreMayorAumento: this.mEmpresa.nombreMayorAumento(),
          totalNominaNueva: this.mEmpresa.totalNominaNueva(),
        });
      }
    });
  }
}
