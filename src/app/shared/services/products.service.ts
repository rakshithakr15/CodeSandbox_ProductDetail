import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as env} from '../../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) {
   }

   getProductDetails(): Observable<any> {
     const url = env.apiURL;
     return this._http
                .get(url)
                .pipe(catchError(this.errorHandler));
   }

   errorHandler(error: HttpErrorResponse) {
     console.log(error.message)
     return throwError(error.message);
   }

}
