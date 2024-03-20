import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { proyectosModel } from './Models/MisProyectosModel';
import { ProyectosService } from './Services/mispoyectos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'PortafolioCARS.App';
  proyectos:proyectosModel[]=[];

  constructor(private proyectoservices : ProyectosService){}
    ngOnInit(): void {
      this.proyectoservices.getDriver().subscribe((result: proyectosModel[])=>{
        this.proyectos =result;});
      console.log(this.proyectos[0])
  }
}