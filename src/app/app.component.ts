import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculasComponent } from "./components/lista-peliculas/lista-peliculas.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, ListaPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peliculas-app';
  nombre:string = 'Omar Yagual';
}
