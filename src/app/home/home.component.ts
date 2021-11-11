import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep, ceps } from '../ceps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  cep: Cep | undefined;

 
    getCep(cep:string) {
      this.router.navigate(['ceps', cep]);
    }



  constructor(private router: Router) {}

  ngOnInit() {}
}
