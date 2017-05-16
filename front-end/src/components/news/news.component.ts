import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { News } from '../../models/news';

import { APP_SERVER } from '../../app/app.module';

@Component({
  selector: 'hl-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewChecked {
  channels: string[];
  news: News[] = [];

  constructor(
    private http: Http
  ) {
  }

  ngOnInit() {
    this.http
      .get(APP_SERVER + 'api/news')
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.channels = data;

          for (let channel of this.channels) {
            this.http
              .get(APP_SERVER + `api/news/${channel}`)
              .map((response: Response) => response.json())
              .subscribe(
                (data) => {
                  this.news.push(data);
                }
              );
          }
        }
      );
  }

  ngAfterViewChecked() {
    document.getElementById('tab0').click();
  }
}
