import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrl: './tarjeta-presentacion.component.css'
})
export class TarjetaPresentacionComponent {
    nombre:String='Juanita Silve'
    profesion:String='Profesora'
    email:String='juanita@gmail.com'
    ciudad:String='Quito'
    imagenUrl='https://i.postimg.cc/d15r1FMJ/jinx-graffiti-blue-3840x2160-19984.jpg'
}
