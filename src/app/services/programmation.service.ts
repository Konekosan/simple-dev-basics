import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable } from 'rxjs';
import { iAnimal } from '../models/iAnimals.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProgrammationService {
  private animals: Animal[] = [];
  private url = 'datas/animals.json';


  constructor(private http: HttpClient) { }

  public fetchAnimals(): Observable<iAnimal[]> {
    return this.http.get<iAnimal[]>(this.url);
  }

  public fetchMammiferes(): Observable<any[]> {
    return this.http.get<iAnimal[]>(this.url);
  }
}
