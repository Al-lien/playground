import { Component } from '@angular/core';
import { FILM_TYPE, FilterService } from '../filter.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  template: `
    <button (click)="filterMovie(enum.COOL)">Film cool</button>
    <button (click)="filterMovie(enum.PAS_COOL)">Film pas cool</button>
    <button (click)="filterMovie(enum.SYMPA)">Film sympa</button>

    <button (click)="reset()">RESET</button>
  `,
  styles: [':host{display: flex; gap: 1rem; flex-direction: column}'],
})
export class SideMenuComponent {
  public enum = FILM_TYPE;

  /**
   * 👇 Utilise la liste des films requetés pour réaliser des opératins via .filter() 👇
   * .filter() renvoit un nouveau tableau (stocké dans ```filteredMovies``` ici)
   * on donne au signal la valeur du tableau que m'a renvoyé la méthode .filter()
   * @param type : LE TYPE DE FILM QUE CHERCHE MON UTILISATEUR
   */
  public filterMovie(type: FILM_TYPE) {
    const filteredMovies = this._filterService.allMovies.filter(
      (m) => m.type === type
    );
    this._filterService.moviesToDisplay.set(filteredMovies);
  }

  /**
   * remet la liste de tous les films dans le signal qui correspondant aux films à afficher.
   */
  public reset() {
    this._filterService.moviesToDisplay.set(this._filterService.allMovies);
  }

  constructor(private _filterService: FilterService) {}
}
