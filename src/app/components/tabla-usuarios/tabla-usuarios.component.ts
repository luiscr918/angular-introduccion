import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from './usuario';
@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css',
})
export class TablaUsuariosComponent {
  constructor(private http: HttpClient) {}

  usuarios: Usuario[] = [];
  ngOnInit(): void {
    this.http.get<Usuario[]>('assets/jsons/usuarios.json').subscribe((data) => {
      this.usuarios = data;
    });
  }
}
