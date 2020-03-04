import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";
import { isPlatformBrowser } from "@angular/common";
import { languages } from "./utils/language.list";
import { LanguageService } from "./shared/services/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "home";

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    translate: TranslateService,
    private localizeService: LocalizeRouterService,
    private languageService: LanguageService
  ) {
    if (isPlatformBrowser(platformId)) {
      translate.setDefaultLang("am");
      translate.addLangs(languages);
      const languageOfBrowser = translate.getBrowserLang();
      const languageFromUrl = this.languageService.languageFromUrl;
      const lang: string = languageFromUrl || languageOfBrowser;
      translate.use(lang.match(/en|am|/) ? lang : "am");

      // this.authorizationService.keepLoggedIn();
    }
  }
}
