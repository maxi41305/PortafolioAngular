import { Component } from '@angular/core';
import { EducacionService } from '../../services/educacion.service';
import { Educacion } from '../../models/educacion';
import { Global } from '../../services/global';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  providers: [EducacionService]
})
export class EducacionComponent {
  public educacion: Educacion[] | undefined;
  public url: string;

  constructor(
    private _EducacionService: EducacionService
  ){
    this.url = Global.url;
  }

  ngOnInit() {
    this._EducacionService.getEducacion().subscribe(
      response => {
        console.log(response);
        this.educacion = response;
        if(response.educacion){
    
        }else{
          
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}


