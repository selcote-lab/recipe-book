import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "recipe 1",
      "Test recipe",
      "https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg"
    ),
    new Recipe(
      "recipe 2",
      "Test recipe 2",
      "https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg"
    )
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
