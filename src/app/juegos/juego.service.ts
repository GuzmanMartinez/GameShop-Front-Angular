import { Injectable } from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Juego } from './juego';
//import { JUEGOS } from './juegos.json';
import {HttpClient} from '@angular/common/http';
import { AlertService } from '../alert/alert.service';


@Injectable( )
export class JuegoService {

  urlServer: string = 'http://localhost:8090/';

  constructor(private http: HttpClient,
    private alertService:AlertService) { }

  getJuegos():Observable<Juego[]>{
    //return of(JUEGOS);
    return this.http.get<Juego[]>(this.urlServer + 'juegos').pipe(
      catchError(e =>{
        console.error(`getJuegos error: "${e.message}"`);
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`,{autoClose: true,keepAfterRouteChange: false});
        return throwError(e);
      })
    );
  }
}
