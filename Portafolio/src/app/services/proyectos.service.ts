import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';
import { Global } from './global';

@Injectable()
export class ProyectosService {

    
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    getProyectos(last:any = null):Observable<any>{

        var proyectos = 'proyectos/proyectos';
        
        if(last != null){
            proyectos = 'proyectos/true';
        }

        return this._http.get(this.url+proyectos);
    }

    getProyecto(proyectosId: string):Observable<any>{
        return this._http.get(this.url+'proyectos/proyecto/'+proyectosId);
    }

   

}