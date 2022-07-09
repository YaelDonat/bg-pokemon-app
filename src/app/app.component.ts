import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  title = 'Pokédex';
  pokemonList:Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]);
  }

  selectPokemon(pokemon:Pokemon){
    console.log(`Vous avez cliqué sur le Pokémon : ${pokemon.name}`);
  }
  selectPokemonById(pokemonId:string){
    const id =+pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon=>pokemon.id == +pokemonId);

    if(pokemon){
     console.log(`Vous avez cliqué sur le Pokémon : ${pokemon.name}`);
     this.pokemonSelected = pokemon;
    }
    else{
      console.log(`Vous avez demandé un Pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
