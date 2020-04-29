import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public characterModel: Character = new Character();
  public loading = false;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.loading = true;
    this.characterService.getCharacters().subscribe((data) => {
      this.characterModel = data;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }, error => {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      Swal.fire('Error',
        'Ocurrió un error, por favor comuniquese con el administrador del sistema', 'error');
    });
  }

}
