import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule,routingmodules } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './chart/menu/menu.component';
import { BannerComponent } from './chart/banner/banner.component';
import { ChartComponent } from './chart/chart.component';
import { MatterComponent } from './matter/matter.component';
import { Banner2Component } from './chart/banner2/banner2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    ChartComponent,
    MatterComponent,
    Banner2Component,
    routingmodules
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
