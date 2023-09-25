import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiReq = req.clone({
      url: `https://api-football-v1.p.rapidapi.com/v3/${req.url}`,
      headers: new HttpHeaders().set('X-RapidAPI-Key', environment.apiKey),
    });

    return next.handle(apiReq);
  }
}
