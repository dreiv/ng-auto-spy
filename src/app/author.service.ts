import { Injectable } from '@angular/core';

export interface Author {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: Author[] = [
    {
      id: 1,
      name: 'John Smith'
    },
    {
      id: 2,
      name: 'Jane Smith'
    }
  ];

  getAuthor(id: number): Author | undefined {
    return this.authors.find(author => author.id === id);
  }

  updateAuthor(author: Author): 'success' | 'error' {
    try {
      const authorIndex = this.authors.findIndex(({id}) => author.id === id);
      this.authors[authorIndex] = author;

      return 'success';
    } catch {
      return 'error';
    }
  }

}
