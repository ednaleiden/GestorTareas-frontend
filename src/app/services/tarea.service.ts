import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseURL = 'http://localhost:8080/api/v0/task';
  constructor(private http:HttpClient) { }

  getAllTareas():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.baseURL+"/list");
  }

  getTareaById(id:number):Observable<Tarea>{
    return this.http.get<Tarea>(`${this.baseURL+"/list"}/${id}`);
  }

  createTarea(tarea:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(this.baseURL+"/create", tarea);
  }

  updateTarea(id:number,tarea:Tarea):Observable<Tarea>{
    return this.http.put<Tarea>(`${this.baseURL}/${id}`,tarea);
  }

  deleteTarea(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
