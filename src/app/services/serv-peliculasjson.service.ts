import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/Peliculas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServPeliculasjsonService {
  private jsonURL ="../json/datos.json"; //Ruta del archivo JSON

  constructor(private httpclient:HttpClient) {

   }
  //  Metodo para obtener la lista de peliculas
   getMovies():Observable <Pelicula[]>{
      return this.httpclient.get<Pelicula[]>(this.jsonURL); //Obtener la lista de peliculas

   }
}
