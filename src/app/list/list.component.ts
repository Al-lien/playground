import { Component, WritableSignal } from '@angular/core';
import { FilterService, IFilm } from '../filter.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template: `
    @for (movie of listMovies(); track movie.id) {
    <li>{{ movie.nom }}</li>
    }
  `,
  styles: [':host{display: flex; gap: 1rem; flex-direction: column}'],
})
export class ListComponent {
  /**
   * 👇 Il y a plusieurs type de signals.
   * Les WritableSignal sont les seuls que tu peux modifier à l'infini (c'est très résumé evidemment...) 👇
   */
  public listMovies: WritableSignal<IFilm[]>;

  constructor(private _filterService: FilterService) {
    this.listMovies = this._filterService.moviesToDisplay;
  }
}
