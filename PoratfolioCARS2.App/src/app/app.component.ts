import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { proyectosModel } from './Models/MisProyectosModel';
import { ProyectosService } from './Services/mispoyectos.service';
import { GatosApiService } from './Services/gatos-api.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  datacat: any[]=[];
  imageUrl ="";

  title = 'PortafolioCARS.App';

  proyectos:proyectosModel[]=[];

  constructor(private proyectoservices : ProyectosService, private gatosApi : GatosApiService){}
    ngOnInit(): void {
      //esto es de la api de gatos
      //this.llenarData();

      //esto es la api que cree
      this.proyectoservices.getDriver().subscribe((result: proyectosModel[])=>{
        this.proyectos =result;});
      console.log(this.proyectos[0])

      this.getcatAleatorio();
  }
  getcatAleatorio(): void{
    this.gatosApi.getcat().subscribe((response: any)=>{
      this.imageUrl = response[0].url;
    });
  }
  obtenerimg(): void{
    console.log("gato");
    this.getcatAleatorio()
  }

  /*
  llenarData(){
    this.gatosApi.getData().subscribe(data =>{
      this.data = data;
      this.imageUrl = data.url;
      console.log(this.data)
    })
  }*/
}