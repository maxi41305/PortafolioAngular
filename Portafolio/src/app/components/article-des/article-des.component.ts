import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';
import { ProyectosService } from '../../services/proyectos.service';
import { Proyectos } from '../../models/proyectos';



@Component({
  selector: 'app-article-des',
  templateUrl: './article-des.component.html',
  styleUrls: ['./article-des.component.css'],
  providers: [ProyectosService]
})
export class ArticleDesComponent implements OnInit {
 

  public url: string | undefined;
  public proyectos: Proyectos[]|any;
  public id_proyecto: String | undefined;
  public nombre: String | undefined;
  public descripcion: String | undefined;
  public imagen: String | undefined;

  constructor(
    private _ProyectosService: ProyectosService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.url = Global.url;
    this.proyectos = new Proyectos('', '', '', '', '', '', '','');
    this.nombre = 'Formulario de contacto';
    this.descripcion = 'Formulario de contacto';
    
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
    
      this._ProyectosService.getProyecto(id).subscribe(
        response => {
          console.log(response);
          this.proyectos = response;
        
          if (response) {
            this.proyectos = response;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
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
    const URL = 'http://localhost:3900/';
    const link = URL + str;
    return link;
  }
  }

