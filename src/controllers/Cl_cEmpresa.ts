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
 * 
 * Considere que la clase empleado hereda de una clase persona
 */

import Cl_mCurso from "../models/Cl_mEmpresa.js";
import { I_vCurso } from "../interfaces/I_vCurso.js";
import Cl_cAlumno from "./Cl_cEmpleado.js";

export default class Cl_cCurso {
  private mCurso: Cl_mCurso = new Cl_mCurso();
  private vCurso: I_vCurso;
  private cAlumno: Cl_cAlumno;

  // Recibe la vista de la bodega y el controlador del Alumno ya armado
  constructor(vistaCurso: I_vCurso, controladorAlumno: Cl_cAlumno) {
    this.vCurso = vistaCurso;
    this.cAlumno = controladorAlumno;

    this.vCurso.onNuevoAlumno(() => this.procesar1Alumno());
  }

  private procesar1Alumno() {
    this.cAlumno.solicitarAlumno((alumno) => {
      if (alumno !== null) {
        this.mCurso.procesarAlumno(alumno);
        this.vCurso.reportar({ notaPromedio: this.mCurso.notaPromedio()});
      }
    });
  }
}
