# Routing en Angular
## Ejercicio para entender el uso de las rutas en Angular

## 1.- Creamos un nuevo proyecto:
`ng new routingDemo`

## 2.- Dentro de proyecto, creamos los siguientes componentes:
`
ng n c componente0
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

Añadimos el módulo RoutesModule a los imports y le indicamos el objeto de navegación:

`
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
 )

//Usamos Hash (#) para que las rutas no sean de HTML5 y aumentar la compatibilidad cuando despleguemos el sitio
`

Así la aplicación ya está usando la ruta de navegación que definimos.

## Trabajamos ahora en nuestro componente principal o `app.component.html`

`
<div class="container">
  <div class="row">
    <div class="col-12">
      <h1>Routing en Angular</h1>
      <h4>Ejercicio prar entender el uso de las rutas en Angular</h4>
      <ul>
        <li>
          <a [routerLink]="['/']">Home - Componente0</a>
        </li>
        <li>
          <a [routerLink]="['/componente1']">Mostrar - Componente1</a>
        </li>
        <li>
          <a [routerLink]="['/componente2']">Mostrar - Componente2</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <router-outlet>
        <!-- Aquí se van a insertar los componentes seleccionados -->
      </router-outlet>
    </div>
  </div>
</div>
`

## Vamos a agregar rutas con parámetros. En nuestro objeto de rutas añadimos las siguientes:
`
  {path: 'componente1/:id', component: Componente1Component},
  {path: 'componente2/:id/:titulo', component: Componente2Component},
`

# Y añadimos los enlaces con parametros en el `app.component.html`
`
        <li>
          <a [routerLink]="['/componente1', 700]">Pasar un parametro</a>
        </li>
        <li>
          <a [routerLink]="['/componente2', 900, 'Angular Routes']">Pasar dos parametros</a>
        </li>
`

# A continuación, modificamos el `componente1.component.ts` para recibir los parametros. Añadimos unos imports e incluimos por medio de inyección de dependencias el router en el constructor:
`
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
    this.route.params.subscribe( params => {
        if (params['id'] != null) {
          console.log("Llego con el parametro id = " + params['id']);
        };
    });
  }

}
`

## Y ahora hacemos lo mismo con el `app.compoente2.component.ts:
`
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      if ( params['id'] != null || params['titulo'] != null) {
          console.log("Llegó con los parámetros id = " + params['id'] + " y titulo = " + params['titulo'])
      }
    });

  }

}
`
