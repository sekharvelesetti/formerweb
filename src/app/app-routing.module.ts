import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { MatterComponent } from './matter/matter.component';


const routes: Routes = [
  {path:'',component:ChartComponent},
  {path:'matter',component:MatterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmodules =[ChartComponent,MatterComponent]
