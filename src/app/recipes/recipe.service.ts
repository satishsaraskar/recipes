import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('pizza',
      'Make perfect pizza at home with this classic  homemade pizza recipe, including a pizza dough recipe, ...',
      'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'
      ,[
        new Ingredient('meat',1),
        new Ingredient(' friesh meat',0)
      ])
    , 
    new Recipe('Tomato Pie with Parmesan and Basil',
      'What could be better in the heart of summer than this fresh tart? With its buttery crust, ...',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'
      ,[
        new Ingredient('meat',1),
        new Ingredient(' friesh meat',2)
      ])
    , new Recipe('Fruit Pizza',
      'Colorful fruit pizza features a vibrant bounty of fruit atop a soft sugar cookie crust and thick, ...',
      'https://bakingamoment.com/wp-content/uploads/2019/07/IMG_5499-fruit-pizza.jpg'
      ,[
        new Ingredient('meat',3),
        new Ingredient(' friesh meat',3)
      ])
  ]
// @Injectable() accing service into module this is using syntx
 constructor(private slService : ShoppingListService){}

  getRecipe() {
    return this.recipes.slice();
  }

  
  // send to recipe-detail to shoping list 
  addIngredientsToShoppingList( ingredient:Ingredient[]){
  this.slService.addIngredients(ingredient);
  }

}