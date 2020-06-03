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
