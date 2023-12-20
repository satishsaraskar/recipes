import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  // @Output() recipeIteSelected =  new EventEmitter<void>();

  
  constructor(private recipeService :RecipeService) { }
  
  @Input() recipe! : Recipe;
  ngOnInit() {
  }

  onSelectedItem() {
      // this.recipeIteSelected.emit()
      this.recipeService.recipeSelected.emit(this.recipe);
  }
}
