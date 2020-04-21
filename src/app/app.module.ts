import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmComponent } from './components/film/film.component';
import { CharacterComponent } from './components/character/character.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetComponent } from './components/planet/planet.component';
import { SpecieComponent } from './components/specie/specie.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'film', component: FilmComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'spaceship', component: SpaceshipComponent },
  { path: 'specie', component: SpecieComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'planet', component: PlanetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmComponent,
    CharacterComponent,
    SpaceshipComponent,
    HomeComponent,
    PlanetComponent,
    SpecieComponent,
    VehicleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
