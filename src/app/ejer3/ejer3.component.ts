import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejer3.component.html',
  styleUrl: './ejer3.component.css'
})
export class Ejer3Component {
  optGenero = [
    {id:'1', value:'H',label:'Hombre'},
    {id:'2', value:'M',label:'Mujer'},
    {id:'3', value:'O',label:'Otros'}
  ]

  optNacion = [
    {id:'1', value:'ESP',label:'Española'},
    {id:'2', value:'POR',label:'Portuguesa'},
    {id:'3', value:'FRA',label:'Francesa'}
  ]

  optProg =[
    {id:false, nombre:"C++"},
    {id:false, nombre:"Java"},
    {id:false, nombre:"JS"},
    {id:false, nombre:"Python"},

  ]

  selectedGenero:String ="";
  selectedNacion:String ="";
  cadenafin:String="";

  mostrar() {
    console.log('Genero:', this.selectedGenero);
    console.log('Nacionalidad:', this.selectedNacion);
    for (let i=0;i<this.optProg.length;i++) {
      if (this.optProg[i].id==true) {
        this.cadenafin+=this.optProg[i].nombre;
        this.cadenafin+=" ";
        
      }
    }
    console.log("Idiomas de programacion :", this.cadenafin)
    this.cadenafin="";
  }
}
