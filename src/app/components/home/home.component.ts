import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicies/porfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miPorfolio: any;

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      if (data) {
        this.miPorfolio = data;
      }
      console.log(data);
    });
  }
}
