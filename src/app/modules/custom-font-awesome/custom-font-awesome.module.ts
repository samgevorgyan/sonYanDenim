import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";

import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [],
  exports: [CommonModule, FontAwesomeModule]
})
export class CustomFontAwesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar);
  }
}
