import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  payment(body: any): Observable<any>{
   return this.http.post('https://run.mocky.io/v3/6389aeec-226e-45c7-8a70-e2f1ff8c8e32', body)
  }
}
