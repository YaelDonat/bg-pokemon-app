import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'red-600';
        break;
      case 'Eau':
        color = 'blue-600';
        break;
      case 'Plante':
        color = 'green-600';
        break;
      case 'Insecte':
        color = 'orange-900';
        break;
      case 'Normal':
        color = 'gray-400';
        break;
      case 'Vol':
        color = 'blue-200';
        break;
      case 'Poison':
        color = 'purple-700';
        break;
      case 'Fée':
        color = 'pink-600';
        break;
      case 'Psy':
        color = 'pink-400';
        break;
      case 'Electrik':
        color = 'yellow-400';
        break;
      case 'Combat':
        color = 'red-900';
        break;
      default:
        color = 'gray-50';
        break;
    }
    return `bg-${color} rounded-xl p-1 mr-2`;
  }

}
