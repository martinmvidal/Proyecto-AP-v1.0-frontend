import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ServExperienciaService {
    expURL = ' https://portfoliov1-vidalmartin.herokuapp.com/explab/'

  constructor( private http: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expURL+'lista');
  }

  public detail(id : number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.expURL + `detail/${id}`)
  }

  public save(experiencia : Experiencia):Observable<any>{
return this.http.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.expURL+ `update/${id}`, experiencia)
  }

  public delete (id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`)
  }
}
