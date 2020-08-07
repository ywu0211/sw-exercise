import { Component, Input, OnInit } from '@angular/core';
import { FilmInfo } from '../../models';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() films: FilmInfo[];

  constructor() { }

  ngOnInit() {
  }

}
