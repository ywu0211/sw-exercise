import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public dialog: MatDialog) {
  }

  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // // how to update the request Parameters
    // const updatedRequest = request.clone({
    //   headers: request.headers.set('Authorization', 'Some-dummyCode')
    // });
    // logging the updated Parameters to browser's console
    // console.log('Before making api call : ', updatedRequest);
    return next.handle(request).pipe(
      catchError((err) => {
        console.log(err);
        this.dialog.open(ErrorDialogComponent, {
          data: {
            detail: err.error.detail,
            statusCode: err.status
          }
        }).addPanelClass('test');
        return throwError(err);
      })
    );
  }
}
