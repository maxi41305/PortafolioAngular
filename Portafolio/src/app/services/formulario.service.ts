import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class FormularioService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    create(formulario: string):Observable<any>{
        let params = JSON.stringify(formulario);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'contactame/savecontactame', params, {headers: headers});
    }

   

}