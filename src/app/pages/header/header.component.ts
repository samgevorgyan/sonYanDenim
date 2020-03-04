import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map, shareReplay, tap } from "rxjs/operators";
import { languageList } from "src/app/utils/language.list";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/shared/services/language.service";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  languageList = languageList;
  languageFromUrl;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      tap(console.log),
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private localizeService: LocalizeRouterService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.languageFromUrl = this.languageService.languageFromUrl;
    this.getSelectedLanguage(this.languageFromUrl);
  }

  openLoginModal() {
    // this.dialogService.openDialog(LoginDialogComponent, "650px");
  }

  getSelectedLanguage(lang) {
    this.languageList.forEach(key => {
      if (key.name === lang) {
        key.selected = true;
      } else {
        key.selected = false;
      }
    });
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    this.localizeService.changeLanguage(lang);
    this.languageService.setLanguageFromUrl();
    this.languageFromUrl = this.languageService.languageFromUrl;
    this.getSelectedLanguage(lang);
  }

  logOut() {
    // this.store.dispatch(actions.Logout());
  }
}
