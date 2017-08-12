import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';


declare var require: any

let RssFeedEmitter = require('rss-feed-emitter');
let feeder = new RssFeedEmitter();

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent

  private feeds: Object;
  private event: any;
  private showFilterRow: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.atomFeed();
  }

  public atomFeed(): void {

    // Fetch the feed from atom feed url
    feeder.add({
      url: 'https://www.jobsatosu.com/all_jobs.atom',
      refresh: 2000
    });

    // Load the feed first then assign it to this.feeds
    setTimeout(() => {
      console.log('feeder', feeder);
      this.feeds = feeder._feedList["0"].items;
      console.log('this.feed', this.feeds);
    }, 5000)

  }

  public onToolbarPreparing(e): void {
    console.log('ON TOOL BAR!', e);
    var self = this
    this.event = e;
    e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'gridTitle'
    },
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          hint: 'Filter',
          icon: 'filter',
          onClick: this.toggleFilterRow.bind(this)
        }
      }
    );
  }

  public goToPost(e): void {
    console.log('row click event', e.key.link);
    window.location.href = e.key.link;
  }

  public toggleFilterRow(): void {
    this.showFilterRow = !this.showFilterRow;
  }

  public onRowPrepared(e) {
    console.log('on row prepared', e);
    e.rowElement.css({ height: 20 });
  }

}
