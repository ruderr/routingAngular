# Routing en Angular
## Ejercicio para entender el uso de las rutas en Angular

## 1.- Creamos un nuevo proyecto:
`ng new routingDemo`

## 2.- Dentro de proyecto, creamos los siguientes componentes:
`ng n c componente0
ng n c componente1
ng n c componente2
`

## 3.- En el index.html agregamos los links para cargas las librerias de Bootstrap:
- Vamos a la página de `Bootstrap.com` y hacemos click en download
- Buscamos BootstrapCDN y copiamos ambos grupos de librerias en nuestro `index.html`

## En el `app.module.ts` agregamos las librerias necesarias para el enrutamiento:

`import { Router, RouterModule } from '@angular/router'`

Definimos a continuación nuestra hoja de navegación:

`
const routes: Routes = [
  {path: '', component: Componente0Component},
  {path: 'componente1', component: Componente1Component},
  {path: 'componente2', component: Componente2Component},
  {path: '**', component: Componente0Component}
];

// El último path '**' es para cuando se hace referencia a cualquier ruta no definida
`
