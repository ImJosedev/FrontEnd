import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageProyectService } from 'src/app/service/image-proyect.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';
  // img: string = '';
  proyecto: Proyecto = null;
  constructor(private proyectoS : ProyectoService,public imageProyectoService: ImageProyectService, private router: Router, private activatedRouter: ActivatedRoute, private tokenService: TokenService){}

  
  
  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.nombre, this.descripcion, /*this.img */);
    // this.proyecto.img = this.imageProyectoService.urlP
    
    this.proyectoS.save(proy).subscribe(data =>{
      alert("Proyecto Añadido Correctamente");
      this.router.navigate(['']);
    },err =>{
      alert("La carga del nuevo proyecto falló");
      this.router.navigate(['']);
    }
    )
  }

  createPImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "imgProyecto_" + id;
    this.imageProyectoService.uploadPImage($event, name);
  }
}
