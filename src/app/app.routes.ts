import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(mod => mod.HomeModule)
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];
