import { Injectable } from '@angular/core';
import { ContentPos } from '../dataModel/content-pos';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  public randomizeSequence: number[][];
  public activeImgParts: Boolean[][];
  initialBlankPos: ContentPos;

  constructor() {
    this.initialBlankPos = {
      x: 2,
      y: 2
    };
    this.randomizeSequence = this.generateRandomizeImgSeq();
    this.activeImgParts = this.initializeActiveImg();
  }

  initializeActiveImg(): Boolean[][] {
    let activeImgs: Boolean[][] = [];
    for(let i=0; i<3;i++) {
      activeImgs.push([]);
      for( let j=0; j<3; j++) {
        activeImgs[i].push(this.isNearBlackPos(i,j));
      }
    }
    return activeImgs;
  }

  generateRandomizeImgSeq(): number[][] {
    var numberSeq: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    var randomizeSeq: number[] = [];
    var randomNumber: number;

    for (let i: number=8; i>1; i--) {
      randomNumber = Math.floor(Math.random()*i);
      randomizeSeq.push(numberSeq[randomNumber]);
      numberSeq.splice(randomNumber, 1);
    }
    randomizeSeq.push(numberSeq[0]);
    randomizeSeq.push(0);

    return [
      randomizeSeq.slice(0,3),
      randomizeSeq.slice(3,6),
      randomizeSeq.slice(6,9)
    ];
  }

  getRandomizeImgSequence(): number[][] {
    return this.randomizeSequence;
  }

  getImgContent(co_ordi: ContentPos): number {
    return this.randomizeSequence[co_ordi.x][co_ordi.y];
  }

  changeBlank(co_ordi: ContentPos): void{
    var temp_pos = this.randomizeSequence[this.initialBlankPos.x][this.initialBlankPos.y];
    this.randomizeSequence[this.initialBlankPos.x][this.initialBlankPos.y] = this.randomizeSequence[co_ordi.x][co_ordi.y];
    this.randomizeSequence[co_ordi.x][co_ordi.y] = temp_pos;
    this.initialBlankPos.x = co_ordi.x;
    this.initialBlankPos.y = co_ordi.y;
    this.activeImgParts = this.initializeActiveImg();
  }

  isNearBlackPos(x: number, y: number): Boolean {
    return (x == this.initialBlankPos.x+1 && y == this.initialBlankPos.y) ||
    (x == this.initialBlankPos.x-1 && y == this.initialBlankPos.y) ||
    (x == this.initialBlankPos.x && y == this.initialBlankPos.y+1) ||
    (x == this.initialBlankPos.x && y == this.initialBlankPos.y-1)
  }
}


