import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Great Recipe', 'A great secret','http://del.h-cdn.co/assets/17/34/640x959/gallery-1503418913-chicken-thighs-delish-1.jpg'),
    new Recipe('Another Great Recipe', 'A super recipe','http://del.h-cdn.co/assets/17/34/640x959/gallery-1503418913-chicken-thighs-delish-1.jpg')
    
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
