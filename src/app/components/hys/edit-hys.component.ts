import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit{
  hys : Hys = null;
  
  constructor(private hysService: HysService, private activatedRouter: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysService.details(id).subscribe(
      data =>{
        this.hys = data;
      }, err =>{
        alert("Error al actualizar la Habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysService.update(id, this.hys).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al actualizar la Habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
