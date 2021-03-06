import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
//import { CepListComponent } from './cep-list/cep-list.component';
import { HomePageComponent } from './home/home.component';
//import { CepComponent } from './cep/cep.component';
import {PlaceComponent } from './place/place.component';
import { HttpClientModule } from '@angular/common/http';
import {PlaceService} from './place.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
   //   { path: 'list', component: CepListComponent },
      //{ path: 'ceps/:numeroCep', component: CepComponent },
      { path: 'place/:numeroPlace', component: PlaceComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    //CepListComponent,
    HomePageComponent,
    //CepComponent,
    PlaceComponent,
  ],
  providers: [HttpClientModule, PlaceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

