import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
    console.log(this.matrix);
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
