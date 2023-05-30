import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Circuit } from 'src/app/models/circuit.interface';
import { CircuitsService } from 'src/app/services/circuits.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css'],
})
export class CircuitComponent implements OnInit {
  circuit: Circuit = {} as Circuit;
  showDetails = false;

  constructor(
    private circuitsService: CircuitsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingService.setLoading(true);
    this.circuitsService.getCircuitById(identifier!).subscribe(
      (circuit) => {
        this.loadingService.setLoading(false);
        if (!circuit) {
          this.router.navigateByUrl('/');
        } else {
          this.circuit = circuit;
        }
      },
      (error) => {
        this.loadingService.setLoading(false);
        console.error('Error fetching circuit:', error);
      }
    );
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
