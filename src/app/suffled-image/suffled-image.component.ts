import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-suffled-image',
  templateUrl: './suffled-image.component.html',
  styleUrls: ['./suffled-image.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SuffledImageComponent {
  constructor(){}

  onWon() {
    setTimeout(() => {
      alert('Congratulation!');
    }, 1000);
  }
}
