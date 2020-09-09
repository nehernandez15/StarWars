import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from 'src/app/services/spaceship.service';
import { Spaceship } from 'src/app/models/spaceship';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {
  public spaceshipModel: Spaceship = new Spaceship();
  public loading = false;

  constructor(
    private spachipService: SpaceshipService
  ) { }

  ngOnInit() {
    this.getSpaceShips();
  }

  getSpaceShips() {
    this.loading = true;
    this.spachipService.getSpaceShips().subscribe((data) => {
      this.spaceshipModel = data;
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
