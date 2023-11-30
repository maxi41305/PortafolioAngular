import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Contactame } from 'src/app/models/contactame';
import {FormularioService} from 'src/app/services/formulario.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [FormularioService]
})
export class FormularioComponent {

  public contactame: Contactame|any;
  public nombre: string | undefined;
  public email: string | undefined;
  public telefono: string | undefined;
  public asunto: string | undefined;
  public mensaje: string | undefined;
  public url: string | undefined;
  public page_title: string;
  public status: string | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _FormularioService: FormularioService
  ) {
    this.contactame = new Contactame('', '', '', '', '','');
    this.page_title = 'Formulario de contacto';
  }

  onSubmit() {

console.log(this.contactame);

    this._FormularioService.create(this.contactame).subscribe(
      response =>{
        if (response.status == 'success') {
       
          this.status = 'success';
        this.contactame = response;
        console.log(response);
        console.log(this.contactame);
       
       
        this._router.navigate(['/home']);
      } else {
        this.status = 'error';
      }

      },
      error =>{
        console.log(error);
      }
    );
  

      
      }
    }
