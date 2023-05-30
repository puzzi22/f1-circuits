import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'f1-circuits';
  isLoading!: Observable<boolean>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.isLoading = this.loadingService.isLoading;
  }
}
