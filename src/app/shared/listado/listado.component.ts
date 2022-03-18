import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../pokedex/services/pokedex.service';
import { PokemonArr } from '../../pokedex/interfaces/pokedex.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public pokemonArr:PokemonArr[] = [] ;
  public search: string = ''; 

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {

    this.pokedexService.listaP().subscribe(poke => {

      this.pokemonArr = poke; 
      console.log('Pokemonarr',this.pokemonArr)  
         
    })

  }

  

}
