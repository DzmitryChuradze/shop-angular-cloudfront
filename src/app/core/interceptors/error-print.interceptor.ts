import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (e: unknown) => {
          const url = new URL(request.url);

          if (
            e instanceof HttpErrorResponse &&
            (e.status === 401 || e.status === 403)
          ) {
            this.notificationService.showError(e.statusText, 0);
          } else {
            this.notificationService.showError(
              `Request to "${url.pathname}" failed. Check the console for the details`,
              0
            );
          }
        },
      })
    );
  }
}
