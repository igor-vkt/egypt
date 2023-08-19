import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { prohibited } from 'src/app/custom_validation'; 

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent {
  cities;
  techIdeasForm: FormGroup;

  constructor(private _cityName: GetCityNamesService, private formB: FormBuilder) {
    this.cities=this._cityName.getNames();
    this.techIdeasForm = this.formB.group({
      name: ["", [Validators.required,Validators.minLength(3), prohibited(/tourist/)]],
      age: [""],
      email: ["", [Validators.required, Validators.email]],
      city: ["", [Validators.required]],
      brief: ["", [Validators.required, Validators.minLength(20), prohibited(/nothing/)]]
    })
  }


  get name(){
    return this.techIdeasForm.get('name')!;
  };
  get age(){
    return this.techIdeasForm.get('age')!;
  };
  get email(){
    return this.techIdeasForm.get('email')!;
  };
  get city(){
    return this.techIdeasForm.get('city')!;
  };
  get brief(){
    return this.techIdeasForm.get('brief')!;
  };


  onSubmit(){
    console.log(this.techIdeasForm.value);
  this.techIdeasForm.reset();
  };

}


