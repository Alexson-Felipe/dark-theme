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
  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    if (theme) {
      this.textTheme = ETheme.ICON_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }
    this.textTheme = ETheme.ICON_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }
}
