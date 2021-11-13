import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  place: Place | undefined;

  constructor(private route: ActivatedRoute,  private placeService: PlaceService) {}


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const numeroPlaceFromRoute = String(routeParams.get('numeroplace'));

     //this.cep = ceps.find((cep) => cep.cep === numeroCepFromRoute);
     this.placeService.getPlace(numeroPlaceFromRoute).subscribe(
      place => this.place = place
    );
  }

}