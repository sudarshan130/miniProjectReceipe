import { EventEmitter } from "@angular/core";
import { Recipe } from "../model/recipe.model";

export class RecipeService{
    private recipeList=[
         new Recipe('PuranPoli' , 'traditional Dish',"https://shwetainthekitchen.com/wp-content/uploads/2020/03/IMG_7944-1512x2048.jpg"),
         new Recipe('Pohe' , 'traditional Snaks',"https://d3pc1xvrcw35tl.cloudfront.net/images/1200x900/pohe_201808126965.jpg"),
         new Recipe('IdaliSambar' , 'Southindian traditional Dish',"https://rakskitchen.net/wp-content/uploads/2014/01/11919320035_1f6dd4da79_z.jpg"),
    ];

    recipeEmitter=new EventEmitter();

    getRecipeObjUsingIndex(index :any){
        return this.recipeList[index]
    }
    
    getRecipes(){
        return this.recipeList;
    }
}