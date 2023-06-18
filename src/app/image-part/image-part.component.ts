import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';
import { ContentPos } from '../dataModel/content-pos';

@Component({
  selector: 'app-image-part',
  templateUrl: './image-part.component.html',
  styleUrls: ['./image-part.component.css']
})
export class ImagePartComponent {

  @Input() src: ContentPos|undefined;
  @Output() isWon: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public puzzleService: PuzzleService) {}

  onClick(): void {
    if (this.src && this.puzzleService.activeImgParts[this.src.x][this.src.y] && !this.puzzleService.isGameStopped) {
      if (this.src) {
        this.puzzleService.changeBlank(this.src);
      }
    }
    if (this.src && this.puzzleService.isPuzzleSolve()) {
      this.isWon.emit(true);
    }
  }
}
