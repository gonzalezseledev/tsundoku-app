import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Podemos especificar qué queremos que pase cuando accedemos a la ruta raíz de la aplicación
// y qué pasará cuando ninguna de las rutas definidas sea capaz de responder a la petición entrante.
// { path: '', pathMatch: 'full', component: HomeComponent } - vuelve a Home, la pagina principal

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent }, // especificación de ruta
  { path: '**', redirectTo: '/home' }  // redireccina hacia otro path
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
