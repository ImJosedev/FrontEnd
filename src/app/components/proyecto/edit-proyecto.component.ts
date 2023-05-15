import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageProyectService } from 'src/app/service/image-proyect.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto : Proyecto = null; 
  
  constructor(private proyectoS: ProyectoService,public imageProyectoService: ImageProyectService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.details(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRouter.snapshot.params['id'];
    // this.proyecto.img = this.imageProyectoService.urlP
    this.proyectoS.update(id, this.proyecto).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  // uploadPImage($event:any){
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   const name = "imgProyecto_" + id;
  //   this.imageProyectoService.uploadPImage($event, name);
  // }
}

