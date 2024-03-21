import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MiComponenteComponent } from './Components/mi-componente/mi-componente.component';

//rutas de Navegacion

const routes: Routes = [
  //{path:'https://hostiarangular.firebaseapp.com/',}
  //{path: '/Components', component: MiComponenteComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
