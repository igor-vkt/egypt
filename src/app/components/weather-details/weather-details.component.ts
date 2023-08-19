import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  name!: string;
  summerM!: number;
  summerN!: number;
  winterM!: number;
  winterN!: number;
  springM!: number;
  springN!: number;
  autumnM!: number;
  autumnN!: number;
  visitTo!: string;
  visitFrom!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.summerM = +params['summerM'];
      this.summerN = +params['summerN'];
      this.winterM = +params['winterM'];
      this.winterN = +params['winterN'];
      this.springM = +params['springM'];
      this.springN = +params['springN'];
      this.autumnM = +params['autumnM'];
      this.autumnN = +params['autumnN'];
      this.visitTo = params['visitTo'];
      this.visitFrom = params['visitFrom'];
    });
  }
}