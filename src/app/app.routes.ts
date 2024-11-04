import { Routes } from '@angular/router';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

export const routes: Routes = [
  {path:'',redirectTo:'/task', pathMatch:'full'},
  {path:'task', component:TareaListComponent},
  {path:'task/new', component:TareaFormComponent},
  {path:'task/:id/edit', component:TareaFormComponent},
];
