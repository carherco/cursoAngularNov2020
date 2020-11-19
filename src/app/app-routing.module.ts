import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UsersComponent } from './components/users/users.component';
import { PrimerComponenteComponent } from './components/primer-componente/primer-componente.component';
import { ParentComponent } from './components/parent/parent.component';
import { KeyUpComponent } from './components/key-up/key-up.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'binding', component: PrimerComponenteComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'keyup', component: KeyUpComponent},
  { path: 'form/template', component: TemplateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
