import { Injectable } from '@angular/core';
import {Place} from './place';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PlaceService {

  constructor(private http: HttpClient) {

  }
  getPlace(place:string){
    return this.http.get<Place>('localhost:8080/place/'+ place);

  }
}