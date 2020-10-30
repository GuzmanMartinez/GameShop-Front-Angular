import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Company } from './company';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  urlServer: string = 'http://localhost:8090/';



  constructor(private http: HttpClient,
    private alertService:AlertService,
    private router:Router,
    private loginService: LoginService) { }

    getCompanies(): Observable<Company[]>{
      return this.http.get<Company[]>(this.urlServer + 'companies',{headers: this.loginService.getAuthHeaders()}).pipe(
        catchError(e => {
        console.error(`update error: "${e.message}"`);
            if (e.status == 401) {
              this.router.navigate(['/login']);
            } else {
              this.alertService.error(`Error al actualizar el juego: "${e.message}"`);
            }
            return throwError(e);
          })
      );

    }
}
