import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { interval, Observable, Subscription } from 'rxjs';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  matrix = [];
  displayMatrix = [];

  cursorSub: Subscription;
  pixelSub: Subscription;

  introText: string = 'Hello! I am a <b>web and mobile developer</b> looking for <b>full-time</b> opportunities in 2021';
  modifiedIntroText: string = 'Hello! I am a web and mobile developer looking for full-time opportunities in 2021';
  displayIntroText: string = '';

  cursorVisible = true;

  constructor() {
  }

  ngOnInit(): void {
    let numRows = 20;
    let numCols = 40;
    for (let i = 0; i < numRows; i++) {
      let weighting1 = numRows - i;
      let elems = [1,0];
      let weights = [weighting1, numRows-weighting1];

      let row = [];

      for (let j = 0; j < numCols; j++) {
        row.push(this.generateWeightedRandomValue(elems, weights));
      }
      this.matrix.push(row);
    }
    const pixelSub = interval(50);
    this.pixelSub = pixelSub.subscribe(val => {
      let diffLen = this.matrix.length - this.displayMatrix.length;
      let index = this.matrix.length - diffLen;

      if (diffLen == 0) {
        this.pixelSub.unsubscribe();
      } else {
        this.displayMatrix.push(this.matrix[index]);
      }
    });

    const cursorSub = interval(75);
    this.cursorSub = cursorSub.subscribe(val => {

      let diffLen = this.modifiedIntroText.length - this.displayIntroText.length;
      if (diffLen == 0) {
        this.cursorSub.unsubscribe();
        this.cursorVisible = false;
        this.displayIntroText = this.introText;
      } else {
        let index = this.modifiedIntroText.length - diffLen;
        this.displayIntroText += this.modifiedIntroText[index];
      }
    });
  }

  add(a, b) { return a + b; }

  generateWeightedRandomValue(elems: Array<number>, weights: Array<number>): void {
    let totalWeight = weights.reduce(this.add, 0);

    let weighedElems = [];
    let currentElem = 0;
    while (currentElem < elems.length) {
      for (let i = 0; i < weights[currentElem]; i++)
        weighedElems[weighedElems.length] = elems[currentElem];
      currentElem++;
    }
    let rnd = Math.floor(Math.random() * totalWeight);
    return weighedElems[rnd];
  }
}
