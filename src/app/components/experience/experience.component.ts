import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicies/porfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
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
