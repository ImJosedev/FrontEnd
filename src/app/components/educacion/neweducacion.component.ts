import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreEd: string;
  descripcionEd: string;

  constructor(private educacionS: EducacionService, private router: Router){
  }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEd, this.descripcionEd);
    this.educacionS.save(educacion).subscribe(
      data=>{
        alert("Educacion Añadida Correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("La carga de la nueva educacion falló");
        this.router.navigate([''])
      }
    );
  }

}
