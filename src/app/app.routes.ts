import { Routes } from '@angular/router';
import { ProgrammationComponent } from './tuiles/programmation/programmation.component';
import { MainComponent } from './main-layout/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'programmation', component: ProgrammationComponent },
];
