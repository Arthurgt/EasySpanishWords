import { Component, Input, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {

  @Input() title: string;
  @Input() set word(word: WordType) {
    if(word) {
      this.words.push(word);
    }
  }

  words: WordType[] = [];
}
