import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../place';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  place: Place | undefined;

 
    getPlace(place:string) {
      this.router.navigate(['place', place]);
    }



  constructor(private router: Router) {}

  ngOnInit() {}
}
