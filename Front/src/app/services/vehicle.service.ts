import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.httpClient.get<any>(environment.baseUrl + 'vehicle/getVehicles', {
      headers: new HttpHeaders({Authorization: 'Bearer', 'Content-Type': 'application/json'})
    }).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(errorResponse: HttpErrorResponse) {
    // return an observable with a meaningful error message to the end user
    return throwError(errorResponse);
  }
}
