import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Pokemon, PokemonInterface } from '../interfaces/pokedex.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url:string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  listaP(){
    return this.http.get<PokemonInterface>(`${this.url}/pokemon?limit=898`)
               .pipe(
                 map(this.listaPokemon)
                 
               )
  };  

  listaPokemon(resp:PokemonInterface){
    
    const pokemonList = resp.results.map(poke => {
      
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      
      return {
        id,
        name: poke.name,
        pic
      }
    })

    return pokemonList;
  }
  
  listaPoke(name:string){
    return this.http.get<Pokemon>(`${this.url}/pokemon/${name}`)               
  };
}
