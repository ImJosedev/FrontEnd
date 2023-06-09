import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit{

  hys : Hys[] = []
  constructor(private hysS: HysService, private tokenService: TokenService){}

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarHys();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHys(): void{
    this.hysS.lista().subscribe(
      data =>{
        this.hys = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.hysS.delete(id).subscribe(
        data =>{
          this.cargarHys();
        }, err =>{
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}

