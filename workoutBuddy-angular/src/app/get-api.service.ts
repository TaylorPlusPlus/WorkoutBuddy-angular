import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor( private http:HttpClient ){ }

  apiCall()
  {
   // return this.http.get('http://localhost:5004/account/get/Faker@live.com');
   return this.http.get('http://localhost:5004/card/getall')
  }

}
