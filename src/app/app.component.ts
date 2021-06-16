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

  cursorSub: Subscription;
  pixelSub: Subscription;

  introText: string = 'Hello! I am a <b>web and mobile developer</b> looking for <b>full-time</b> opportunities in 2021';
  modifiedIntroText: string = 'Hello! I am a web and mobile developer looking for full-time opportunities in 2021';

  cursorVisible = true;

  constructor() {
  }

  ngOnInit(): void {
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
