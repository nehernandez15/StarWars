import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/planet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  public planetModel: Planet = new Planet();
  public loading = false;

  constructor(
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.loading = true;
    this.planetService.getPlanets().subscribe((data) => {
      this.planetModel = data;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }, error => {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      Swal.fire('Error',
        'Ocurrió un error, por favor comuniquese con el administrador del sistema',
         'error');
    });
  }

}
