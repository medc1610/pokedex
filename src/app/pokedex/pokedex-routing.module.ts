import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
 
 {path:'',
 children:[  
  {
    path: ':name',
    component: PokemonComponent
  }  
 ]}
 
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
