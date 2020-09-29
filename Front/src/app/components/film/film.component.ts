import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/models/film';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  public filmModel: Film = new Film();
  public loading = false;

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.loading = true;
    this.filmService.getFilms().subscribe((data) => {
      this.filmModel.results = data;
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
