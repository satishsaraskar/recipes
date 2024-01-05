import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit  {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

 constructor(private recipeService :RecipeService ,
              private router :Router  ,
                private route :ActivatedRoute ){}

 recipes:Recipe[]

  ngOnInit(){
   this.recipeService.recipeChanged
      .subscribe(
        (recipes :Recipe []) => {
          this.recipes = recipes;
        }
      )

   this.recipes =this.recipeService.getRecipe()

  }
   
  // onRecipeItemSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe);

  // }
  onNewRecipe () {
    this.router.navigate(['new'], {relativeTo : this.route}) 
  }
}
