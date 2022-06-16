import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicies/porfolio.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  miPorfolio: any;
  
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      if (data) {
        this.miPorfolio = data;
      }
    });
  }
}

