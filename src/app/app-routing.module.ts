import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExpComponent } from './components/experiencia/edit-exp/edit-exp.component';
import { NuevaExpComponent } from './components/experiencia/nueva-exp/nueva-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nueva-exp', component: NuevaExpComponent},
  {path:'edit-exp/:id', component:EditExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
