import { Component, OnInit } from '@angular/core';
import CharactersJson from '../../../assets/characters.json';
import { CharacterList, FilmInfo } from 'src/app/models/index.js';
import { ApiService } from '../../services/index.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  characters: CharacterList = CharactersJson;
  films: FilmInfo[];
  constructor(
    private service: ApiService
  ) { }

  ngOnInit() { }

  onClickCharName(payload) {
    this.service.getCharacterDetails(payload)
      .pipe(
        mergeMap(person => this.service.getFilmList(person.films))
      )
      .subscribe(res => this.films = res);
  }
}
