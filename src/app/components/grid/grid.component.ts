import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Circuit } from 'src/app/models/circuit.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  @Input() circuits: Circuit[] = [];
  @Input() displayedColumns: string[] = ['id', 'name', 'length'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDetails(circuit: Circuit) {
    this.router.navigate(['/circuit', circuit.id]);
  }
}
