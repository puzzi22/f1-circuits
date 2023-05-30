import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitComponent } from './components/circuit/circuit.component';
import { CircuitsComponent } from './components/circuits/circuits.component';

const routes: Routes = [
  { path: '', component: CircuitsComponent },
  { path: 'circuit/:id', component: CircuitComponent },
  { path: '**', component: CircuitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
