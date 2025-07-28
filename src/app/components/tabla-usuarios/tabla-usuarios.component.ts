import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { FormsModule } from '@angular/forms';
import { DetalleUsuariosComponent } from "../detalle-usuarios/detalle-usuarios.component";
@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, DetalleUsuariosComponent],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css',
})
export class TablaUsuariosComponent {
  constructor(private http: HttpClient) {}

  usuarios: Usuario[] = [];
  nombre='';
  carrera='';
  edad:number|null=null;
  usuario_seleccionado?:Usuario;
  mensajeHijo='Detalles no Mostrados aún';
  ngOnInit(): void {
    this.http.get<Usuario[]>('assets/jsons/usuarios.json').subscribe((data) => {
      this.usuarios = data;
    });
  }
  seleccionarUsuario=(usuario:Usuario)=>{
    this.usuario_seleccionado=usuario;
  }
  //metodo para recibir el valor que mande desde el componente hijo
  onConfirmacion(confirmacion:boolean){
    if (confirmacion) {
      this.mensajeHijo='Detalles Mostrados'
    }
  }
}
