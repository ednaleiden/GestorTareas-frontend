import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {

  tareas?:Tarea[];

  constructor(private tareaServices:TareaService){

  }


  ngOnInit():void{
    this.cargarTareas();
  }

  cargarTareas():void{
    this.tareaServices.getAllTareas().subscribe(tareas =>{
      this.tareas = tareas;
    } )
  }

  eliminarTarea(id?:number):void{
    this.tareaServices.deleteTarea(id!).subscribe(() =>{
      this.cargarTareas();
    })
  }


}
