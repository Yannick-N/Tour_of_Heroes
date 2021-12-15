import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes-db';
import { Observable, of } from 'rxjs'
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);
  }
}
