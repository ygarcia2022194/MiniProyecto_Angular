import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Asegúrate de importar HttpClientTestingModule
import { DogsService } from './dogs.service';

import { FormsModule } from '@angular/forms';

describe('DogsService', () => {
  let service: DogsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule], 
      providers: [DogsService]
    });

    service = TestBed.inject(DogsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
