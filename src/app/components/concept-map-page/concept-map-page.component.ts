import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import * as jsnx from 'jsnetworkx';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'concept-map-page',
  templateUrl: './concept-map-page.component.html',
  styleUrls: ['./concept-map-page.component.scss']
})
export class ConceptMapPageComponent implements OnInit {

  search: string = "web developer";
  linksLinkBack: boolean;
  minPercentMatch: number = 0.1;
  loading: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.completeSearch();
  }
  async completeSearch(): Promise<void> {
    this.loading = true;
    let titles: Array<string> = await this.httpService.getWikiAPI(this.search).toPromise();
    let newTitles: Array<string> = [];
    for (let title of titles) {
      let compareTitles: Array<string> = await this.httpService.getWikiAPI(title).toPromise();
      let comp = this.compareArrays(titles, compareTitles);
      if (comp >= this.minPercentMatch) {
        if (this.linksLinkBack) {
          if (compareTitles.includes(this.search)) {
            newTitles.push(title);
          }
        } else {
          newTitles.push(title);
        }
      }
    }
    console.log(titles.length);
    console.log(newTitles.length);
    this.createGraph(this.search, newTitles);
    this.loading = false;
  }
  compareArrays(arr1: Array<string>, arr2: Array<string>): number {
    let val = arr1.reduce( (total, cur) => {
      if (arr2.includes(cur)) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    return val / arr1.length;
  }

  createGraph(topic: string, titles: Array<string>): void {
    let G = new jsnx.Graph();
    G.addNode(topic);

    for( let title of titles) {
      G.addEdgesFrom([[title, this.search], [this.search,title]]);
    }
    
    jsnx.draw(G, {
        element: '#canvas',  
        weighted: true,
        withLabels: true,
        nodeStyle: {
          stroke: 'none',
          fill: '#448AFF',
          r: 20
        },
        labelStyle: {
          'font-size': '10px'
        },
        edgeStyle: {
            fill: '#999'
        }
    });
  }

}
