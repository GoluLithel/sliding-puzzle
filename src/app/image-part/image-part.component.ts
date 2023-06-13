import { Component, Input, OnInit } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';
import { ContentPos } from '../dataModel/content-pos';

@Component({
  selector: 'app-image-part',
  templateUrl: './image-part.component.html',
  styleUrls: ['./image-part.component.css']
})
export class ImagePartComponent {

  @Input() src: ContentPos|undefined;

  constructor(public puzzleService: PuzzleService) {}

  onClick(): void {
    if (this.src) {
      this.puzzleService.changeBlank(this.src);
    }
  }


}
