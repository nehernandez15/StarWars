import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  public planetModel: Planet = new Planet();

  constructor(
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getPlanets().subscribe((data) => {
      this.planetModel = data;
    });
  }

}
