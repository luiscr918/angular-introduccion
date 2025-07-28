import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../tabla-usuarios/usuario';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css',
})
export class DetalleUsuariosComponent {
  confirmacionMensaje: boolean = false;
  @Input() usuario!: Usuario;
  //ejecutar el cambio de estado y la emision cada vez que se renderize el componente
  ngOnInit(): void {
    this.cambiarEstadoConfirmacion();
  }
  //evento para mandar mi valor al padre
  @Output() confirmacion = new EventEmitter<boolean>();

  //metodo para emitir mi valor
  emitirConfirmacion = () => {
    this.confirmacion.emit(this.confirmacionMensaje);
  };
  //cambiar estado de confirmacion
  cambiarEstadoConfirmacion = () => {
    this.confirmacionMensaje = true;
    this.emitirConfirmacion();
  };
}
