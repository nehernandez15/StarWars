import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/models/film';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
  
})
export class FilmComponent implements OnInit {
  public filmModel: Film = new Film();
  

  constructor(
    private filmService: FilmService
   
  ) {
    

   }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.filmService.getFilms().subscribe((data) => {
      this.filmModel = data;
    });
  }

}
