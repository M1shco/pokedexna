import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokedexComponent,GraficoComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input({required:true})imageUrl : string='';

  @Output() clickPokemon =new EventEmitter <number> ();
  
  previoPokemon():void{
    this.clickPokemon.emit(-1);
  }
  siguientePokemon():void{
    this.clickPokemon.emit(1);
  }
}
