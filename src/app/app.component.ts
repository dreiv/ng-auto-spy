import { Component, OnInit } from '@angular/core';
import { AuthorService, Author } from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  author: Author | undefined;

  constructor(private authors: AuthorService) {}

  ngOnInit(): void {
    this.author = this.authors.getAuthor(0);
  }
}
