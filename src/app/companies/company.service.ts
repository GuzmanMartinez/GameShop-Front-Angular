import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Company } from './company';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  urlServer: string = 'http://localhost:8090/';

  constructor(private http: HttpClient,
    private alertService:AlertService) { }

    getCompanies(): Observable<Company[]>{
      return this.http.get<Company[]>(this.urlServer + 'companies').pipe(
        catchError(e =>{
          console.error(`getCompany error: "${e.message}"`);
          this.alertService.error(`Error al consultar las Compañias: "${e.message}"`,{autoClose: true,keepAfterRouteChange: false});
          return throwError(e);
        })
      );

    }
}
