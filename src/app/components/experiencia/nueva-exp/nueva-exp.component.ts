import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {
nombreE: string ='';
descripcionE: string='';

  constructor(private servExp: ServExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const exp = new Experiencia(this.nombreE, this.descripcionE);
  this.servExp.save(exp).subscribe(data=>{
    alert("Experiencia añadida");
    this.router.navigate(['']);
  }, err=>{
alert("Fallo añadir experiencia");
this.router.navigate(['']);
  }
  )
}
}
