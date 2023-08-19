import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities:any;
  color:any;
  
  constructor(private _cities: GetcitiesService){}

  ngOnInit(){
    this.cities=this._cities.getCities();
    this.color = this.colorIt();
  }

  colorIt() {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].touristAttractions.length < 3) {
        return false;
      }
    }
    return true;
  }

}