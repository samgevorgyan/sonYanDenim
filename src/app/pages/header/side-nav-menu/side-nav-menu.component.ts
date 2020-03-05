import { LanguageService } from "src/app/shared/services/language.service";

import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { languageList } from "src/app/utils/language.list";

@Component({
  selector: "side-nav-menu",
  templateUrl: "./side-nav-menu.component.html",
  styleUrls: ["./side-nav-menu.component.scss"]
})
export class SideNavMenuComponent implements OnInit {
  @Output() language = new EventEmitter();
  @Input() user;
  languageFromUrl = this.languageService.languageFromUrl;
  user$ = this.user;
  showConfigMenu = false;
  showLanguageList = false;
  languageList = languageList;
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  openConfigMenu() {
    this.showConfigMenu = !this.showConfigMenu;
  }
  openLanguageList() {
    this.showLanguageList = !this.showLanguageList;
  }
  changeLanguage(lang) {
    this.language.emit(lang);
  }
}
