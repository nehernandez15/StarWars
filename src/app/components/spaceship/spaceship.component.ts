import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from 'src/app/services/spaceship.service';
import { Spaceship } from 'src/app/models/spaceship';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {
  public spaceshipModel: Spaceship = new Spaceship();

  constructor(
    private spachipService: SpaceshipService
  ) { }

  ngOnInit() {
    this.getSpaceShips();
  }

  getSpaceShips() {
    this.spachipService.getSpaceShips().subscribe((data) => {
      this.spaceshipModel = data;
    });
  }

}
