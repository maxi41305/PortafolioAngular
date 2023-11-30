import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";


import { EducacionComponent } from "./components/educacion/educacion.component";
import { PresentacionComponent } from "./components/presentacion/presentacion.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { EducaciondesComponent } from "./components/educaciondes/educaciondes.component";
import { ArticleDesComponent } from "./components/article-des/article-des.component";
import { ErrorComponent } from "./components/error/error.component";

//array de rutas

const appRoutes: Routes = [
    {path: 'educacion', component: EducacionComponent},
    {path: 'educacion/educacion/:id', component: EducaciondesComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'presentacion', component: PresentacionComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'proyectos/article/:id', component: ArticleDesComponent},
    {path: '', component: PresentacionComponent},
    {path: '**', component: ErrorComponent}
]

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)