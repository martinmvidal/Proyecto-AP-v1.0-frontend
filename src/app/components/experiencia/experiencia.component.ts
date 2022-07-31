import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exp: Experiencia[] = []


  constructor(private servExp: ServExperienciaService, private tokenService : TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }
  cargarExperiencia():void{
    this.servExp.lista().subscribe(data => {this.exp = data;});
    
  }

}