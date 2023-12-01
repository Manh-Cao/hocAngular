import { Injectable } from '@angular/core';
import {  throwError, catchError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor(private h:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getSanPham(){
    return this.h.get('http://localhost:3000/sanpham').pipe(
      catchError(this.handleError)
    );
  }


  themSanPham(sp:any){
    return this.h.post('http://localhost:3000/sanpham',sp);
}

xoaSanPham(id:number){
  return this.h.delete('http://localhost:3000/sanpham/'+ id)
}

suaSanPham(sp:any){
  return this.h.put('http://localhost:3000/sanpham/' + sp.id ,sp);
}

  
}
