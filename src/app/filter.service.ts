import { Injectable, signal } from '@angular/core';

export enum FILM_TYPE {
  COOL,
  PAS_COOL,
  SYMPA,
}

export interface IFilm {
  id: number;
  nom: string;
  type: FILM_TYPE;
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  /**
   * 👇 MA LISTE DE FILM REQUETÉE DEPUIS LE BACKEND 👇
   */
  public allMovies: IFilm[] = [
    {
      id: 1,
      nom: 'Film 1',
      type: FILM_TYPE.COOL,
    },
    {
      id: 2,
      nom: 'Film 2',
      type: FILM_TYPE.COOL,
    },
    {
      id: 3,
      nom: 'Film 3',
      type: FILM_TYPE.COOL,
    },
    {
      id: 4,
      nom: 'Film 4',
      type: FILM_TYPE.PAS_COOL,
    },
    {
      id: 5,
      nom: 'Film 5',
      type: FILM_TYPE.PAS_COOL,
    },
    {
      id: 6,
      nom: 'Film 6',
      type: FILM_TYPE.SYMPA,
    },
    {
      id: 7,
      nom: 'Film 7',
      type: FILM_TYPE.SYMPA,
    },
    {
      id: 8,
      nom: 'Film 8',
      type: FILM_TYPE.SYMPA,
    },
    {
      id: 9,
      nom: 'Film 9',
      type: FILM_TYPE.SYMPA,
    },
  ];

  /**
   * 👇 LA LISTE DES FILMS QUE JE VEUX AFFICHER 👇
   * par défaut, elle contient tous les films que j'ai requetés
   */
  public moviesToDisplay = signal(this.allMovies);

  constructor() {}
}
