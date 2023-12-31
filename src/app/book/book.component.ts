import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  categories: string[] = [
    'Romance',
    'Ficção científica',
    'Não ficção',
    'Biografia',
    'Autoajuda',
    'História',
    'Poesia',
    'Literatura infantil',
    'Livros de culinária',
  ];

}
