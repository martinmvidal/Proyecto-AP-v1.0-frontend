import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
expEdit: Experiencia =null;

  constructor(private servExp: ServExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
this.servExp.detail(id).subscribe(data=>{
  this.expEdit = data;
  
}, err=>{
  alert("Error al modificar Experiencia");
  this.router.navigate(['']);
})
  }

onUpdate(): void{
  const id = this.activatedRoute.snapshot.params['id'];
this.servExp.update(id, this.expEdit).subscribe(data=>{
  alert("Experiencia actualizada")
  this.router.navigate(['']);
},err=>{
  alert("Error al modificar Experiencia");
  this.router.navigate(['']);
}
)
}


  

}
