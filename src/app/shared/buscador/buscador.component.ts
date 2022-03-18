import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokedex/interfaces/pokedex.interfaces';
import { PokedexService } from '../../pokedex/services/pokedex.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  {
  
  
  public search: string = '';
  public hayError:boolean = false;
  

  constructor(private pokedexService: PokedexService,
              private router: Router) { }  
  
  buscarPokemon(){   

    this.hayError = false;
    
    this.pokedexService.listaPoke(this.search).subscribe({

        next: (poke) => {
          
          this.search = poke.name; 
          console.log('poke',poke)

        },

        error: (e) => {

          this.search = '';
          this.hayError = true;

        }

        // complete: () => console.info('complete') 
    })       
  }

  setPokemon(direccion:string){
    
    return this.router.navigate([`/pokedex/${direccion}`]);
  }


  
}
