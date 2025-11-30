import { Component, OnInit } from '@angular/core';
import { ProgrammationService } from '../../services/programmation.service';
import { iAnimal } from '../../models/iAnimals.interface';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-programmation',
  imports: [MatTableModule],
  templateUrl: './programmation.component.html',
  styleUrl: './programmation.component.css'
})

export class ProgrammationComponent implements OnInit {
  title = "Programmation";
  nom: string = "Bennou";
  animals: iAnimal[] = [];
  displayedColumns = ['name', 'species', 'description', 'color', 'image'];

  constructor(private programmationService: ProgrammationService){

  }

  ngOnInit(){
    this.programmationService.fetchAnimals().subscribe(animals => {
      this.animals = animals;
    });
  }


}