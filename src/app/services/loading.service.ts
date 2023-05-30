import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public readonly isLoading: Observable<boolean> =
    this._isLoading.asObservable();

  setLoading(isLoading: boolean) {
    this._isLoading.next(isLoading);
  }
}
