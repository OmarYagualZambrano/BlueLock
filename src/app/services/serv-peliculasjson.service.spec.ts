import { TestBed } from '@angular/core/testing';

import { ServPeliculasjsonService } from './serv-peliculasjson.service';

describe('ServPeliculasjsonService', () => {
  let service: ServPeliculasjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPeliculasjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
