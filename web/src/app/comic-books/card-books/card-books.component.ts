import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: [
    './card-books.component.scss',
    '../comic-books.component.scss'
  ]
})
export class CardBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
