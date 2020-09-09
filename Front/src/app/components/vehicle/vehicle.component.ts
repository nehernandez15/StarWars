import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicleModel: Vehicle = new Vehicle();
  public loading = false;

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.loading = true;
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicleModel = data;
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
