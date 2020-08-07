import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import CharactersJson from '../../../assets/characters.json';
import { CharacterList, FilmInfo } from 'src/app/models/index.js';
import { ApiService } from '../../services/index.service';
import { finalize, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  characters: CharacterList = CharactersJson;
  films: FilmInfo[];
  displaySpinner: boolean;
  constructor(
    private service: ApiService
  ) { }

  ngOnInit() { }

  onClickCharName(payload) {
    this.displaySpinner = true;
    this.service.getCharacterDetails(payload)
      .pipe(
        mergeMap(person => this.service.getFilmList(person.films)),
        finalize(() => this.displaySpinner = false)
      )
      .subscribe(res => this.films = res);
  }
}
