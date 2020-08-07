import { async, inject, TestBed } from '@angular/core/testing';

import { ApiService } from './index.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IndexService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let apiService: ApiService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it ('should call httpClient with character url', () => {
    apiService.getCharacterDetails('https://swapi.dev/api/people/1/');
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://swapi.dev/api/people/1');
  });

  xit('should return character information when getCharacterDetails is call', async(
    inject([HttpClient, ApiService], (http, aapiService) => {
      const testData = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/6/',
          'https://swapi.dev/api/films/3/',
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/7/'
        ],
        species: [
          'https://swapi.dev/api/species/1/'
        ],
        vehicles: [
          'https://swapi.dev/api/vehicles/14/',
          'https://swapi.dev/api/vehicles/30/'
        ],
        starships: [
          'https://swapi.dev/api/starships/12/',
          'https://swapi.dev/api/starships/22/'
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.dev/api/people/1/'
      };
      spyOn(http, 'get').and.returnValue(of( testData));
      aapiService.getCharacterDetails().subscribe((url: string) => {
        expect(url).toMatch( url );
      });
    })
  ));
});
