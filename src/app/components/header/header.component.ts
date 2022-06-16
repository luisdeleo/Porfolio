import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicies/porfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
