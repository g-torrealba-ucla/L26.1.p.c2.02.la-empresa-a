export default class mEmpleado {
  private _nombre: string = "";
  private _cedula: number = 0;
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
    this.nombre = nombre;
    this.cedula = cedula;
    this.sueldoActual = sueldoActual;
    this.aniosTrabajando = aniosTrabajando;
  }

  set nombre(nombre: string) {
    this._nombre = nombre.trim();
  }
  get nombre(): string {
    return this._nombre;
  }

  set cedula(cedula: number) {
    this._cedula = +cedula;
  }
  get cedula(): number {
    return this._cedula;
  }

  set sueldoActual(sueldoActual: number) {
    this._sueldoActual = +sueldoActual;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }

  set aniosTrabajando(aniosTrabajando: number) {
    this._aniosTrabajando = +aniosTrabajando;
  }
  get aniosTrabajando(): number {
    return this._aniosTrabajando;
  }

  aumento(): number {
    if (this.aniosTrabajando < 5) return this.sueldoActual * 0.10;
    return this.sueldoActual * 0.20;
  }

  nuevoSueldo(): number {
    return this.sueldoActual + this.aumento();
  }
}
