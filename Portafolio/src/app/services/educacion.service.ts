import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';
import { Global } from './global';

@Injectable()
export class EducacionService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    getEducacion(last:any = null):Observable<any>{

        var educacion = 'educacion/educacion';
        
        if(last != null){
            educacion = 'educacion/true';
        }

        return this._http.get(this.url+educacion);
    }

    getEducaciones(educacionId: string):Observable<any>{
        return this._http.get(this.url+'educacion/educaciones/'+educacionId);
    }

   

}