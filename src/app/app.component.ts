import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, ListComponent],
  template: `<app-side-menu></app-side-menu> <app-list></app-list>`,
  styles: [':host{display: flex; gap: 3rem}'],
})
export class AppComponent {
  title = 'playground';
}
