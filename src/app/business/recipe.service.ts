import { Ingredient } from "../business/models/ingredient.model";
import { Recipe } from "../business/models/recipe.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "./shoppingList.service";
@Injectable()
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      "Great fish meal",
      "Best fish ever",
      "http://fromitalywithlove.com.au/wp-content/uploads/2019/03/insalata-di-mare-1.jpg",
      [new Ingredient("fish", 19), new Ingredient("bread", 1)]
    ),
    new Recipe(
      "Fat burger",
      "Great burger",
      "https://c.pxhere.com/photos/2a/05/hamburger_burger_bun_grilled_seed_sandwich_american_meal-561120.jpg!d",
      [new Ingredient("cheese", 5), new Ingredient("Milk", 1)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
