import { Component} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="mx-auto text-center">
    <img class="mx-auto my-5 w-auto h-auto" src="../assets/images/pageNotFound.png" alt="pokédex_img">
    <img class="mx-auto my-5 max-h-48 " src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
    <p class="text-3xl text-center font-semibold mb-10"> Hé ! Jeune dresseur, cette page n'existe pas.</p>
    <a routerLink="/pokemons" class="bg-yellow-500 p-2 m-5 rounded-lg">
      Retourner à l'acceuil
    </a>
  </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {
}
