import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Circuit } from 'src/app/models/circuit.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() circuit!: Circuit;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/circuit', this.circuit.id]);
  }
}
