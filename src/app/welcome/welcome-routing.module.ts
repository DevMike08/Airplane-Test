import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

// Define las rutas para este módulo.
const routes: Routes = [
  {
    path: '', // Ruta raíz (página de inicio).
    component: HomeComponent // El componente que se muestra cuando se accede a la ruta raíz.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa el módulo de enrutamiento y configura las rutas definidas.
  exports: [RouterModule] // Exporta el módulo de enrutamiento para que otros módulos puedan importarlo.
})
export class WelcomeRoutingModule { }
