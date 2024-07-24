import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoRecipeComponent } from './recipe/no-recipe/no-recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeformComponent } from './recipe/recipeform/recipeform.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path : '', redirectTo : '/recipe', pathMatch : 'full' },
  { path : 'recipe', component : RecipeComponent ,children : [
    {path : '', component : NoRecipeComponent},
    {path : 'new', component :RecipeformComponent},
    {path : ':id' , component : RecipeDetailsComponent},
    {path : ':id/edit',component : RecipeformComponent}
  ] },
  {path : 'shopping' , component : ShoppingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
