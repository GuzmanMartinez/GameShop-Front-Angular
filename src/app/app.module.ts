import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head/head.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoService } from './juegos/juego.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { FormComponent  as JuegosFormComponent} from './juegos/form.component';
import { FormsModule } from '@angular/forms'

const ROUTES: Routes = [
  { path: '', redirectTo: '/juegos', pathMatch: 'full'},
  {path: 'juegos',component:JuegosComponent},
  {path: 'juegos/form',component:JuegosFormComponent},
  {path: 'companies',component:CompaniesComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadComponent,
    JuegosComponent,
    AlertComponent,
    CompaniesComponent,
    JuegosFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
