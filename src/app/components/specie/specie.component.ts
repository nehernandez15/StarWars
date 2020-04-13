import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { Specie } from 'src/app/models/specie';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {
  public specieModel: Specie = new Specie();

  constructor(
    private specieService: SpecieService
  ) { }

  ngOnInit() {
    this.getSpecies();
  }

  getSpecies() {
    this.specieService.getSpecies().subscribe((data) => {
      this.specieModel = data;
    });
  }

}
