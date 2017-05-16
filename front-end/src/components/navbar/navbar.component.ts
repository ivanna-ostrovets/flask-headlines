import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_SERVER } from '../../app/app.module';

@Component({
  selector: 'hl-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  channels: string[];

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
        }
      );
  }

  selectTab(tabId: string) {
    document.getElementById(tabId).click();
  }
}
