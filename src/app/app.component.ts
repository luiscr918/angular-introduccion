import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TarjetaPresentacionComponent } from "./components/tarjeta-presentacion/tarjeta-presentacion.component";
import { TablaUsuariosComponent } from "./components/tabla-usuarios/tabla-usuarios.component";
import { ContadorComponent } from "./components/contador/contador.component";
import { BotonesComponent } from "./components/botones/botones.component";
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { UsoDirectivasComponent } from "./components/uso-directivas/uso-directivas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, TarjetaPresentacionComponent, TablaUsuariosComponent, ContadorComponent, BotonesComponent, CarruselComponent, UsoDirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-introduccion';
}
