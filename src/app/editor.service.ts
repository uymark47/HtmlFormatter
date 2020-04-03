import { Injectable, Inject, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})

export class News {
  id: number;
  title: string;
  formatTitle: string;
  body: string;
  link: string;
  source: string;
  formatSource: string;
  paywall: boolean;
  rank: number;
}

export class EditNews {
  news: News;
  index: number;
}

export class SourceCount {
  source: string;
  count: number = 0;
}

export class EditorService {
  dataBank: News[] = [];
  selectData: EventEmitter<EditNews> = new EventEmitter<EditNews>();
  newsSources: SourceCount[] = [];

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  select(index: number, item: News) {
    this.selectData.emit({ index, news: item});
  }

  async addNews(data: News) {
    data.body = data.body.trim();
    data.title = data.title.trim();
    if (data.rank && data.rank > 0) {
      data.rank -= 1;
      this.dataBank.splice(data.rank, 0, data);
    } else {
      this.dataBank.push(data);
    }
    this.formatDataBank();
    this.countSources();
  }

  async edit(data: News, index) {
    this.dataBank[index] = data;
    if (data.rank && data.rank > 0) {
      this.dataBank = [
        ..._.slice(this.dataBank, 0, index),
        ..._.slice(this.dataBank, index + 1, this.dataBank.length)
      ];
      data.rank -= 1;
      this.dataBank.splice(data.rank, 0, data);
    }
    this.countSources();
    this.formatDataBank();
  }

  formatDataBank() {
    this.storage.remove('current');
    this.addItems(this.dataBank);
    for (const data of this.dataBank) {
      data.formatTitle = `<strong><em><a href = "${data.link}">${data.title}</a></em></strong>`;
      data.formatSource = data.paywall ? `<em>-- ${data.source}</em> (paywall)` : `<em>-- ${data.source}</em>`;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const changeItemIndex = this.dataBank[event.previousIndex];
    this.dataBank = [
      ..._.slice(this.dataBank, 0, event.previousIndex),
      ..._.slice(this.dataBank, event.previousIndex + 1, this.dataBank.length)
    ];
    this.dataBank.splice(event.currentIndex, 0, changeItemIndex);
    this.formatDataBank();
  }

  removeOne(index) {
    this.dataBank.splice(index, 1);
    this.formatDataBank();
  }

  addItems(items: News[]) {
    this.storage.set('current',  JSON.stringify(items));
  }

  clearItems() {
    this.dataBank = [];
    this.newsSources = [];
    this.storage.remove('current');
  }

  getItems() {
    try {
      return JSON.parse(this.storage.get('current'));
    } catch (e) {

    }
  }

  initialSetup() {
    const items = this.getItems();
    if (items && items.length > 0) {
      this.dataBank = items;
    }
    this.countSources();
    this.formatDataBank();
  }

  getItem(i: number) {
    return this.dataBank[i];
  }

  countSources() {
    this.newsSources = [];
    for (const news of this.dataBank) {
      const sourceIndex = _.findIndex(this.newsSources, { source: news.source });
      if (sourceIndex < 0) {
        const newSource : SourceCount = {
          source: news.source,
          count: 1
        }
        this.newsSources.push(newSource);
      } else {
        this.newsSources[sourceIndex].count += 1;
      }
    }
  }
}
