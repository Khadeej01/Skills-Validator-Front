import { Routes } from '@angular/router';
import {BriefCreateComponent} from './components/brief-create/brief-create.component';
import {BriefListComponent} from './components/brief-list/brief-list.component';

export const routes: Routes = [
  {path: "brief-create", component: BriefCreateComponent},
  {path: "brief-list", component: BriefListComponent}

];
