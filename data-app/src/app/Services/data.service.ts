import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {


   }

   GetStudentData():Observable<any>{
     return this.http.get('https://www.jsonblob.com/api/jsonblob/f8523a1c-3917-11e9-a7e9-b5ccf82bd69a')
   }

   GetWeatherData():Observable<any>{
     return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=f4d4b62efcf03ffeb9646cea12afd247')
   }
}
