import { Injectable } from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Juego } from './juego';
//import { JUEGOS } from './juegos.json';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AlertService } from '../alert/alert.service';


@Injectable( )
export class JuegoService {

  urlServer: string = 'http://localhost:8090/';
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient,
    private alertService:AlertService) { }

  getJuegos():Observable<Juego[]>{
    //return of(JUEGOS);
    return this.http.get<Juego[]>(this.urlServer + 'juegos').pipe(
      catchError(e =>{
        console.error(`getJuegos error: "${e.message}"`);
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`,{autoClose: false,keepAfterRouteChange: false});
        return throwError(e);
      })
    );
  }

  create(juego:Juego):Observable<Juego>{
    //return of(JUEGOS);
    return this.http.post<Juego>(this.urlServer + 'juegos', juego, {headers:this.httpHeaders}).pipe(
      catchError(e =>{
        console.error(`create error: "${e.message}"`);
        this.alertService.error(`Error al crear el juegos: "${e.message}"`,{autoClose: false,keepAfterRouteChange: false});
        return throwError(e);
      })
    );
  }

  getJuego(id: number):Observable<Juego>{
    //return of(JUEGOS);
    return this.http.get<Juego>(`${this.urlServer}juegos/${id}`).pipe(
      catchError(e =>{
        console.error(`getJuego error: "${e.message}"`);
        this.alertService.error(`Error al consultar el juegos: "${e.message}"`,{autoClose: false,keepAfterRouteChange: false});
        return throwError(e);
      })
    );
  }

  update(juego: Juego):Observable<Juego>{
    //return of(JUEGOS);
    return this.http.put<Juego>(`${this.urlServer}juegos/${juego.idJuego}`,juego,{headers:this.httpHeaders}).pipe(
      catchError(e =>{
        console.error(`update error: "${e.message}"`);
        this.alertService.error(`Error al consultar el juegos: "${e.message}"`,{autoClose: false,keepAfterRouteChange: false});
        return throwError(e);
      })
    );
  }

}
