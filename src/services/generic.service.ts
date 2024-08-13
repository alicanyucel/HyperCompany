import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { ResultModel } from 'src/models/result.model';
import { api } from 'src/constans/constans';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(
    private http: HttpClient,private error:ErrorService, private _spinner: NgxSpinnerService) { }
    post<T>(apiUrl: string, body: any, callBack: (res: ResultModel<T>) => void, errorCallback?: (err: HttpErrorResponse) => void) {
      this._spinner.show();
      this.http.post<ResultModel<T>>(`${api}/${apiUrl}`, body).subscribe({
        next: (res => {
          callBack(res);
          this._spinner.hide();
        }),
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.error.errorHandler(err);
          if (errorCallback!==undefined) {
            errorCallback(err);
          }
        }
      });
    }
  }
  