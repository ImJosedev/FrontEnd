import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = environment.URL + 'proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public details(id: number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `details/${id}`);
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, hys: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hys);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`)
  }
  
}
