import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-ordenador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ordenador.component.html',
  styleUrl: './ordenador.component.css'
})
export class OrdenadorComponent {
  optRAM = [
    {id:'1', value:'32',label:'RAM32'},
    {id:'2', value:'16',label:'RAM16'},
    {id:'3', value:'8',label:'RAM8'}
  ]
  optProcs= [
    {id:'1', value:'i3',label:'Intel I3'},
    {id:'2', value:'i5',label:'Intel I5'},
    {id:'3', value:'i7',label:'Intel I7'}
  ]
  optDD= [
    {id:'1', value:'hdd',label:'HDD'},
    {id:'2', value:'sdd',label:'SDD'},
  ]
  optPU = [
    {id:'1',value:'500', label:'500W'},
    {id:'2',value:'600', label:'600W'},
    {id:'3',value:'700', label:'700W'},
    {id:'4',value:'750', label:'750W'}
  ];
  selectedRAM: number=0;
  selectedProcesador: string="";
  selectedDisco: string="";
  selectedPU: string="";
  TarjetaGrafica: boolean = false;

  mostrar() {
    console.log('Tamaño de RAM:', this.selectedRAM);
    console.log('Tipo de procesador:', this.selectedProcesador);
    console.log('Disco duro:', this.selectedDisco);
    console.log('Fuente de alimentación:', this.selectedPU);
    console.log('¿Incluir tarjeta gráfica?:', this.TarjetaGrafica);
  }
}
