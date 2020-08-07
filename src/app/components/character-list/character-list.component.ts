import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterList } from '../../models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() list: CharacterList;
  @Output() clickCharName = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

  getCharDetails(url) {
    this.clickCharName.emit(url);
  }
}
