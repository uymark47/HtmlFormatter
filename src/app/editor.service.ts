import { Injectable, Inject, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import * as shuffle from 'shuffle-array';

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
  rank: number = 0;
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

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  select(index: number, item: News) {
    this.selectData.emit({ index, news: item });
  }

  async addNews(data: News) {
    data.body = data.body.trim();
    data.title = data.title.trim();
    // if (data.rank && data.rank > 0) {
    //   data.rank -= 1;
    //   this.dataBank.splice(data.rank, 0, data);
    // } else {
    // }
    this.dataBank.push(data);
    this.handleRank();
    this.formatDataBank();
    this.countSources();
  }

  async edit(data: News, index) {
    console.log(index);
    this.dataBank[index] = data;
    // if (data.rank && data.rank > 0) {
    //   this.dataBank = [
    //     ..._.slice(this.dataBank, 0, index),
    //     ..._.slice(this.dataBank, index + 1, this.dataBank.length)
    //   ];
    //   data.rank -= 1;
    //   this.dataBank.splice(data.rank, 0, data);
    // }
    this.handleRank();
    this.countSources();
    this.formatDataBank();
  }

  formatDataBank() {
    this.storage.remove('current');
    this.addItems(this.dataBank);
    for (const data of this.dataBank) {
      data.formatTitle = `<strong><em><a href = "${data.link}">${data.title}</a></em></strong>`;
      data.formatSource = data.paywall
        ? `<em>-- ${data.source}</em> (paywall)`
        : `<em>-- ${data.source}</em>`;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const changeItemIndex = this.dataBank[event.previousIndex];
    this.dataBank = [
      ..._.slice(this.dataBank, 0, event.previousIndex),
      ..._.slice(this.dataBank, event.previousIndex + 1, this.dataBank.length)
    ];
    changeItemIndex.rank = event.currentIndex
      ? this.dataBank[event.currentIndex - 1].rank
      : 1;
    this.dataBank.splice(event.currentIndex, 0, changeItemIndex);
    this.formatDataBank();
  }

  removeOne(index) {
    this.dataBank.splice(index, 1);
    this.formatDataBank();
  }

  addItems(items: News[]) {
    this.storage.set('current', JSON.stringify(items));
  }

  clearItems() {
    this.dataBank = [];
    this.newsSources = [];
    this.storage.remove('current');
  }

  getItems() {
    try {
      return JSON.parse(this.storage.get('current'));
    } catch (e) {}
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
      const sourceIndex = _.findIndex(this.newsSources, {
        source: news.source
      });
      if (sourceIndex < 0) {
        const newSource: SourceCount = {
          source: news.source,
          count: 1
        };
        this.newsSources.push(newSource);
      } else {
        this.newsSources[sourceIndex].count += 1;
      }
    }
  }

  handleRank() {
    let rankedNews: News[] = [];
    let unrankedNews: News[] = [];
    for (const news of this.dataBank) {
      if (news.rank > 0) {
        rankedNews.push(news);
      } else {
        unrankedNews.push(news);
      }
    }
    rankedNews.sort((a, b) => {
      return a.rank - b.rank;
    });
    // rankedNews = this.shuffleNews(rankedNews);
    this.dataBank = [...rankedNews, ...unrankedNews];
  }

  // shuffleNews(rankedNews: News[]) {
  //     let shuffledRankedNews: News[] = [];
  //     for (let x = 1; x < 6; x++) {
  //         const sameRank: News[] = [];
  //         for (const news of rankedNews) {
  //             if (news.rank === x) {
  //                 sameRank.push(news);
  //             }
  //         }
  //         const shuffledNews = shuffle(sameRank);
  //         shuffledRankedNews.push(...shuffledNews);
  //     }
  //     console.log(shuffledRankedNews);
  //     return shuffledRankedNews;
  // }

  async duplicateCheck(news: News) {
    const title = await this.duplicateTitleCheck(news);
    if (title) {
      return true;
    }
    const body = await this.duplicateBodyCheck(news);
    if (body) {
      return true;
    }
    const url = await this.duplicateURLCheck(news);
    if (url) {
      return true;
    }
    return false;
  }

  duplicateTitleCheck(news: News): Promise<boolean> {
    const duplicateTitleIndex = _.findIndex(this.dataBank, {
      title: news.title
    });
    if (duplicateTitleIndex >= 0) {
      return this.duplicateHandler('Title');
    } else {
      return new Promise<boolean>(resolve => {
        return resolve(false);
      });
    }
  }

  duplicateBodyCheck(news: News): Promise<boolean> {
    const duplicateBodyIndex = _.findIndex(this.dataBank, { body: news.body });
    if (duplicateBodyIndex >= 0) {
      return this.duplicateHandler('Body');
    } else {
      return new Promise<boolean>(resolve => {
        return resolve(false);
      });
    }
  }

  duplicateURLCheck(news: News): Promise<boolean> {
    const duplicateUrlIndex = _.findIndex(this.dataBank, { link: news.link });
    if (duplicateUrlIndex >= 0) {
      // duplicate exist
      return this.duplicateHandler('URL');
    } else {
      return new Promise<boolean>(resolve => {
        return resolve(false);
      });
    }
  }

  duplicateHandler(duplicateProp: string): Promise<boolean> {
    return Swal.fire({
      title: `Duplicated ${duplicateProp}`,
      text: 'Are you sure you want to add?',
      type: 'error',
      confirmButtonText: 'Add',
      confirmButtonColor: '#f44336',
      showCancelButton: true
    }).then(result => {
      if (result && result.value) {
        return false;
      } else {
        return true;
      }
    });
  }
}
