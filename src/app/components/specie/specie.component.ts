import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { Specie } from 'src/app/models/specie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {
  public specieModel: Specie = new Specie();
  public loading = false;

  constructor(
    private specieService: SpecieService
  ) { }

  ngOnInit() {
    this.getSpecies();
  }

  getSpecies() {
    this.loading = true;
    this.specieService.getSpecies().subscribe((data) => {
      this.specieModel = data;
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
