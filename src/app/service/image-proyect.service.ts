import { Injectable } from '@angular/core';
import {Storage, list, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage'


@Injectable({
  providedIn: 'root'
})
export class ImageProyectService {
  urlP: string = "";
  constructor(private storage: Storage) { }
  
  //Cargar imagenes en la seccion Proyectos
  public uploadPImage($event:any, name: string){
    const file = $event.target.files[0]; 
    const imgref = ref(this.storage, 'proyecto/' + name)
    uploadBytes(imgref, file)
    .then(response =>{this.getProyectImages()})
    .catch(error => console.log(error))
  }

  
  getProyectImages(){
    const imagesRef = ref(this.storage, 'proyecto')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.urlP = await getDownloadURL(item); 
        console.log("la url es: " + this.urlP);
      }
    } )
    .catch(error => console.log(error))
  }

  

}

