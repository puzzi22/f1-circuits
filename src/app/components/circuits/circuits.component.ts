import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component, OnInit } from '@angular/core';
import { Circuit } from 'src/app/models/circuit.interface';
import { CircuitsService } from 'src/app/services/circuits.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger('100ms', [animate('500ms', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CircuitsComponent implements OnInit {
  circuits: Circuit[] = [];
  viewMode: 'table' | 'card' = 'table';

  constructor(
    private circuitsService: CircuitsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.circuitsService.getAllCircuits().subscribe((circuits) => {
      this.circuits = circuits;
      this.loadingService.setLoading(false);
    });
  }
}
