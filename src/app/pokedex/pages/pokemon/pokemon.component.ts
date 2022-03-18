import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../../interfaces/pokedex.interfaces';
import { PokedexService } from '../../services/pokedex.service';




@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemonNombre:string = '';
  public pokemonTipo1:string = '';
  public pokemonTipo2:string = '';
  public pokemonId:number = 0;
  

  constructor(private pokedexService: PokedexService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( (ruta:Params) => {    
      
      
       this.pokedexService.listaPoke(ruta['name']).subscribe((poke:Pokemon) => {        
        console.log('poke',poke)
        this.pokemonTipo2 = '';        
        this.pokemonId = poke.id;
        this.pokemonNombre = poke.name;
        this.pokemonTipo1 = poke.types[0].type.name;

        if(poke.types[1]){    

          this.pokemonTipo2 = poke.types[1].type.name

        };
      });
    });





    
  }



}
