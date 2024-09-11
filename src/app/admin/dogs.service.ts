import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getRandomDogImage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(this.apiUrl);
  }
}
