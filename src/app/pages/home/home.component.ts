import { Component } from '@angular/core';
import { Carrrusel2Component } from "../../components/carrrusel2/carrrusel2.component";
import { BotonesComponent } from "../../components/botones/botones.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carrrusel2Component, BotonesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
