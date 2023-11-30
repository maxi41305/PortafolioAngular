import { Component } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { Proyectos } from '../../models/proyectos';
import { Global } from '../../services/global';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [ProyectosService]
})
export class ProyectosComponent {
 
  public proyecto: Proyectos[] | undefined;
  public url: string;

  constructor(
    private _ProyectosService: ProyectosService
  ){
    this.url = Global.url;
  }

  ngOnInit() {
    this._ProyectosService.getProyectos().subscribe(
      response => {
        this.proyecto = response;
        console.log(response);
        if(response.proyecto){
          this.proyecto = response;
         
        }else{
          
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
