import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/ArticleComponent';
import { BtnredesComponent } from './components/btnredes/btnredes.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleDesComponent } from './components/article-des/article-des.component';
import { EducaciondesComponent } from './components/educaciondes/educaciondes.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormularioComponent,
    SliderComponent,
    HeaderComponent,
    ArticleComponent,
    BtnredesComponent,
    PresentacionComponent,
    EducacionComponent,
    ProyectosComponent,
    ErrorComponent,
    ArticleDesComponent,
    EducaciondesComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
