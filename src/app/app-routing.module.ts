import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'newhys',component: NewHysComponent},
  {path:'edithys/:id', component: EditHysComponent},
  {path:'editacercade/:id', component: EditAcercaDeComponent},
  {path:'newproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
