import { Component } from '@angular/core';
const data = [
  {
    id: '1',
    title: 'Part Time Promoter at Subang Jaya',
    subtitle: 'Maggie Promoter',
    published: {
      month: 'March',
      day: '6',
      year: '2019'
    },
    thumbnail: 'http://www.szirine.com/wpmain/uploads/2017/03/Ferris-wheel-1893-768x568.jpg',
    text: 'Interested'
  },
  {
    id: '2',
    title: 'Usher at Bukit Jalil',
    subtitle: 'BMW Event',
    published: {
      month: 'April',
      day: '7',
      year: '2019'
    },
    thumbnail: 'http://www.szirine.com/wpmain/uploads/2016/02/Screen-Shot-2016-02-07-at-15.45.39.png',
    text: 'Interested'
  },
  {
    id: '3',
    title: 'Emcee at Bukit Jalil',
    subtitle: 'BMW Event',
    published: {
      month: 'April',
      day: '7',
      year: '2019'
    },
    thumbnail: 'http://www.szirine.com/wpmain/uploads/2015/12/fnhum-06-00066-g006.jpg',
    text: 'Interested'
  }
  ];
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles: any = [];
  constructor() {}
  ngOnInit() {
    this.articles = data;
  }
  openArticle(index: number) {
    console.log('TODO');
  }
}
