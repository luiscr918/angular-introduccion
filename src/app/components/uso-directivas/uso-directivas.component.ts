import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-uso-directivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uso-directivas.component.html',
  styleUrl: './uso-directivas.component.css'
})
export class UsoDirectivasComponent {
    validacionEdad:boolean=false;

    activarLista(){
      this.validacionEdad=true;
    }
    desactivarLista(){
      this.validacionEdad=false;
    }
}
