import { Injectable } from "@angular/core";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  public languageFromUrl: string;

  setLanguageFromUrl() {
    this.languageFromUrl = this.localizeService.parser.currentLang
      ? this.localizeService.parser.currentLang
      : this.localizeService.parser.defaultLang;
  }

  constructor(public localizeService: LocalizeRouterService) {
    this.setLanguageFromUrl();
  }
}
