import { Component, OnInit } from "@angular/core";
import { Recipe } from "../business/models/recipe.model";
import { RecipeService } from "../business/recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
}
