import { Injectable } from '@angular/core';
import { CitiesInfo } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

  constructor() { }
  
  getCities() {
    return CitiesInfo;
  }
}
