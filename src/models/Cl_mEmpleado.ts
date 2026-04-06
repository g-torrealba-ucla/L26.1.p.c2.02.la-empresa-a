import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEmpleado extends Cl_mPersona {
  private _sueldoActual: number = 0;
  private _aniosTrabajando: number = 0;

  constructor({
    nombre,
    cedula,
    sueldoActual,
    aniosTrabajando,
  }: {
    nombre: string;
    cedula: number;
    sueldoActual: number;
    aniosTrabajando: number;
  }) {
    super({ nombre, cedula });
    this.sueldoActual = sueldoActual;
    this.aniosTrabajando = aniosTrabajando;    
  }
  set sueldoActual(value: number) {
    this._sueldoActual = value;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }
  set aniosTrabajando(value: number) {
    this._aniosTrabajando = value;
  }
  get aniosTrabajando(): number {
    return this._aniosTrabajando;
  }
  get aumento(): number {
    if (this.aniosTrabajando < 5) return this.sueldoActual * 0.1;
    return this.sueldoActual * 0.2;
  }
  get nuevoSueldo(): number {
    return this.sueldoActual + this.aumento;
  }
}
