import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [],
  exports: [
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ]
})
export class CustomMaterialModule {}
