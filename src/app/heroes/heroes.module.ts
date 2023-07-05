import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { AppHeroesListComponent } from "./list/app-heroes-list.component";


@NgModule({
  declarations: [
    HeroComponent,
    AppHeroesListComponent
  ],
  exports: [
    HeroComponent,
    AppHeroesListComponent
  ]
})
export class HeroesModule {

}
