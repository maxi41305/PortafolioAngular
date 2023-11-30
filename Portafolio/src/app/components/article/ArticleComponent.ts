import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { Proyectos } from 'src/app/models/proyectos';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  public url: string;
  public urlImage : string | undefined;
  @Input() proyecto: Proyectos[] | undefined;
  @Input() educacion: Educacion[] | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  
  }

  ngOnInit() {
   

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
