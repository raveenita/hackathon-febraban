import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';


const appRoutes : Routes = [
  { path: '', component: HomepageComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PoliticaDePrivacidadeComponent,
    QuemSomosComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
