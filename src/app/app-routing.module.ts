import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UsersComponent } from './components/users/users.component';
import { PrimerComponenteComponent } from './components/primer-componente/primer-componente.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'binding', component: PrimerComponenteComponent },
  { path: 'parent', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
