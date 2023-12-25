import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  // @Output() recipeIteSelected =  new EventEmitter<void>();


  
  @Input() recipe! : Recipe;

  @Input() index: number;
  ngOnInit() {
  }
//passing id data send input detail components 
  // onSelectedItem() {
  //     // this.recipeIteSelected.emit()
  //     this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
