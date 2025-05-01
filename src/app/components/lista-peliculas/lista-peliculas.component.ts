import { Component } from '@angular/core';
import { Pelicula } from '../../models/Peliculas';
import { ServPeliculasjsonService } from '../../services/serv-peliculasjson.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-lista-peliculas',
  imports: [NgIf,NgFor,UpperCasePipe,CurrencyPipe,DatePipe,MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaPeliculasComponent {
  private tittle:string = 'Lista de Peliculas';
  movies:Pelicula[] = [];
  title: any;

  constructor(private servicio:ServPeliculasjsonService) {

    };

    //Funcioni de angular que se ejecuta al crearse elcomponente
    ngOnInit():void{
      this.cargarPeliculas(); //Llamar al metodo de cargar peliculas
    }



  //Metodo de cargar peliculas
  cargarPeliculas():void{
    //LLamar metodo de servicio
    this.servicio.getMovies().subscribe((data:Pelicula[])=>{
      this.movies = data; //Asignar la lista de peliculas a la variable movies
    });
  }

  comprar(peli:Pelicula){
    alert("Has comprado la pelicula: " + peli.title);
  }

  activar(imgP:HTMLImageElement){
    //imgP.src="";
    imgP.classList.add("activa");

  }

  desactivar(imgP:HTMLImageElement){

    imgP.classList.remove("activa");

  }

}
