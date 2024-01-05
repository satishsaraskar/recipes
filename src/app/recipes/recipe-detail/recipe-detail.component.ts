import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe! : Recipe;
  recipe! : Recipe;
  id: number;
   constructor(private recipeService : RecipeService ,
          private route :ActivatedRoute
          ,private router : Router){

   }
  ngOnInit(){
    // one approches
    //  const id = this.route.snapshot.params['id'];

    // second 
       this.route.params 
        .subscribe(
          (params:Params) => {
            this.id = +params['id']
            this.recipe = this.recipeService.getRecipes(this.id)
          }
        )
  }
  

  onAddToShoopingList(){
    // call the service  passing data to serive 
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);


}


onEditRecipe (){
  
  this.router.navigate(['edit'] , {relativeTo:this.route});
  // this.router.navigate(['../',this.id, 'edit'] , {relativeTo: this.route})
}

onDeleteRecipe() {
  this.recipeService.deleteRecipe(this.id)
}
}
