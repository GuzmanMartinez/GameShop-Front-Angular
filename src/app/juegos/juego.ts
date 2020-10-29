import { Company } from '../companies/company';

export class Juego {

  idJuego: number;
  titulo: String;
  fechaLanzamiento: String;
  precio: number;
  pegi: number;
  categoria: String;
  companies:Company[]
}
