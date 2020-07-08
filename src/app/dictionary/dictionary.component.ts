import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  word: IWord;
  constructor(private dictionaryService: DictionaryService) { }
  search(word: string) {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }

  ngOnInit(): void {
  }

}
