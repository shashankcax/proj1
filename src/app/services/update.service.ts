import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }

  getBook(id: number): any {
    return 100;  }
}
