import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';
import { EducacionService } from '../../services/educacion.service';
import { Educacion } from '../../models/educacion';


@Component({
  selector: 'app-educaciondes',
  templateUrl: './educaciondes.component.html',
  styleUrls: ['./educaciondes.component.css'],
  providers: [EducacionService]
})
export class EducaciondesComponent {

  public url: string | undefined;
  public educacion: Educacion[]|any;
  public id_educacion: String | undefined;
  public nombre: String | undefined;
  public descripcion: String | undefined;
  public imagen: String | undefined;

  constructor(
    private _EducacionService: EducacionService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.url = Global.url;
    this.educacion = new Educacion('', '', '', '', '', '', '' ,'' ,'','');
    this.nombre = 'Formulario de contacto';
    this.descripcion = 'Formulario de contacto';
    
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
    
      this._EducacionService.getEducaciones(id).subscribe(
        response => {
          console.log(response);
          this.educacion = response;
        
          if (response) {
            this.educacion = response;
          } else {
            //this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          //this._router.navigate(['/home']);
        }
      );

    });
  }
  linkImg(urlImage: any) {
    // quito la palabra public
    let str = urlImage.replace(/public/g, '');
    // quito la barra '\'
    str = str.replace('\\', '');
    // invierto la barra en sentido a '/'
    str = str.replace('\\', '/');
    // console.log(str);
    const URLL = 'http://localhost:3900/';
    const link = URLL + str;
    return link;
  }
  }

