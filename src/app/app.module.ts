import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Router, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {path: '', component: Componente0Component},
  {path: 'componente1', component: Componente1Component},
  {path: 'componente2', component: Componente2Component},
  {path: 'componente1/:id', component: Componente1Component},
  {path: 'componente2/:id/:titulo', component: Componente2Component},
  {path: '**', component: Componente0Component} // Cuando se hace referencia a cualquier ruta no definida
];

@NgModule({
  declarations: [
    AppComponent,
    Componente0Component,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }) //Usamos Hash para que las rutas no sean de HTML5 y aumentar la compatibilidad cuando despleguemos el sitio
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
