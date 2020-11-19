import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './components/primer-componente/primer-componente.component';
import { OtroComponent } from './components/otro/otro.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UsersComponent } from './components/users/users.component';
import { MenuComponent } from './components/menu/menu.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    OtroComponent,
    HighlightDirective,
    PowerPipe,
    GaleriaComponent,
    UsersComponent,
    MenuComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
