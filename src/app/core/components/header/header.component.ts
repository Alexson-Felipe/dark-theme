import { ETheme } from '../../enuns/ETheme.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;
  private currentTheme: 'light' | 'dark' | 'dracula' = 'light';

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    // Remove all theme classes
    document.body.classList.remove('dark-theme', 'dracula-theme');

    // Cycle through themes: light -> dark -> dracula -> light
    switch (this.currentTheme) {
      case 'light':
        document.body.classList.add('dark-theme');
        this.currentTheme = 'dark';
        this.icon = ETheme.ICON_SUN;
        this.textTheme = ETheme.TEXT_SUN;
        break;
      case 'dark':
        document.body.classList.add('dracula-theme');
        this.currentTheme = 'dracula';
        this.icon = ETheme.ICON_SUN;
        this.textTheme = ETheme.TEXT_DRACULA;
        break;
      case 'dracula':
        this.currentTheme = 'light';
        this.icon = ETheme.ICON_MOON;
        this.textTheme = ETheme.TEXT_MOON;
        break;
    }
  }
}
